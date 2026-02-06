import { Component, computed, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionTitleComponent } from '../../shared/components/section-title/section-title.component';
import { SelectModule } from 'primeng/select';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';
import { DESTINATIONS } from './constants/programs.constant';
import { ProgramZone, ProgramDestination, ProgramRegion, ProgramFile } from '../../shared/models/program.interface';

interface DropdownOption {
  label: string;
  value: string;
}

@Component({
  selector: 'app-programs',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    SectionTitleComponent,
    SelectModule,
    CardModule,
    ButtonModule
  ],
  templateUrl: './programs.component.html'
})
export class ProgramsComponent {
  // Referencia a window para usar en el template
  readonly window = window;

  // Constante de programas
  readonly programs = DESTINATIONS;

  // Señales para los valores seleccionados
  selectedZone = signal<string | null>(null);
  selectedDestination = signal<string | null>(null);
  selectedRegion = signal<string | null>(null);

  // Opciones computadas para los dropdowns
  zoneOptions = computed<DropdownOption[]>(() =>
    this.programs.map(zone => ({
      label: zone.name,
      value: zone.name
    }))
  );

  destinationOptions = computed<DropdownOption[]>(() => {
    const zoneName = this.selectedZone();
    if (!zoneName) return [];

    const zone = this.programs.find(z => z.name === zoneName);
    if (!zone) return [];

    return zone.destinations.map(dest => ({
      label: dest.name,
      value: dest.name
    }));
  });

  regionOptions = computed<DropdownOption[]>(() => {
    const zoneName = this.selectedZone();
    const destName = this.selectedDestination();
    if (!zoneName || !destName) return [];

    const zone = this.programs.find(z => z.name === zoneName);
    if (!zone) return [];

    const destination = zone.destinations.find(d => d.name === destName);
    if (!destination || !destination.region) return [];

    return destination.region.map(reg => ({
      label: reg.name,
      value: reg.name
    }));
  });

  // PDFs disponibles (computado basado en la selección)
  availablePrograms = computed<ProgramFile[]>(() => {
    const zoneName = this.selectedZone();
    const destName = this.selectedDestination();
    const regName = this.selectedRegion();

    if (!zoneName || !destName) return [];

    const zone = this.programs.find(z => z.name === zoneName);
    if (!zone) return [];

    const destination = zone.destinations.find(d => d.name === destName);
    if (!destination) return [];

    // Si tiene archivos directos (sin regiones)
    if (destination.files) {
      return destination.files;
    }

    // Si tiene regiones
    if (destination.region && regName) {
      const region = destination.region.find(r => r.name === regName);
      return region?.files || [];
    }

    return [];
  });

  // Manejo de cambios en los dropdowns
  onZoneChange(): void {
    this.selectedDestination.set(null);
    this.selectedRegion.set(null);
  }

  onDestinationChange(): void {
    this.selectedRegion.set(null);
  }

  // Abrir PDF en nueva pestaña
  openPDF(file: ProgramFile): void {
    window.open(file.link, '_blank');
  }

  // Descargar PDF
  downloadPDF(file: ProgramFile): void {
    const link = document.createElement('a');
    link.href = file.link;
    link.download = file.name + '.pdf';
    link.click();
  }
}
