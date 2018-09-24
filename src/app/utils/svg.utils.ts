import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material';

export const loadSVGResource = (ir: MatIconRegistry, ds: DomSanitizer) => {
    const imgDir = 'assets/img';
    const avatarDir = `${imgDir}/avatar`;
    const iconDir = `${imgDir}/icons`;
    // ir.addSvgIcon(
    //   'logo',
    //   ds.bypassSecurityTrustResourceUrl('assets/img/logo-ptr.svg'));
    ir.addSvgIconInNamespace(
        'logo',
        'ptr',
        ds.bypassSecurityTrustResourceUrl(`${imgDir}/logo-ptr.svg`));
    ir.addSvgIconSetInNamespace('avatars', ds.bypassSecurityTrustResourceUrl(`${avatarDir}/avatars.svg`));
    ir.addSvgIconSetInNamespace('unassigned', ds.bypassSecurityTrustResourceUrl(`${avatarDir}/unassigned.svg`));
    ir.addSvgIcon('move', ds.bypassSecurityTrustResourceUrl(`${iconDir}/move.svg`));
    ir.addSvgIcon('delete', ds.bypassSecurityTrustResourceUrl(`${iconDir}/delete.svg`));
    ir.addSvgIcon('add', ds.bypassSecurityTrustResourceUrl(`${iconDir}/add.svg`));
};

