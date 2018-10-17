import {
    trigger, state, style, transition, keyframes, animate, group
} from '@angular/animations';

export const slide2Rigth = trigger('routeAnim', [
    state('void',
        style({
            'position': 'absolute',
            'width': '100%',
            'height': '100%'
        })),
    state('*',
        style({
            'position': 'absolute',
            'width': '100%',
            'height': '100%'
        })),
    transition(':enter',
        [
            style({
                transform: 'translateX(-100%)',
                opacity: 0
            }),
            group([
                animate('1s ease-in-out', style({ transform: 'translateX(0)' })),
                animate('1s ease-in-out', style({ opacity: 1 })),
            ])
        ]),
    transition(':leave',
        [
            style({
                transform: 'translateX(0%)',
                opacity: 1
            }),
            group([
                animate('1s ease-in-out', style({ transform: 'translateX(100%)' })),
                animate('1s ease-in-out', style({ opacity: 0 })),
            ])
        ]),
]);
