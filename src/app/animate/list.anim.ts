import {
    trigger, state, style, transition, keyframes, animate, group, query, stagger
} from '@angular/animations';

export const listAnimation = trigger('listAnim', [
  //  transition(':enter, * => 0, * => -1', []),
    transition(':increment',
        [
            // query(':enter', style({ opacity: 0 }), { optional: true }),
            query(':enter',
                [
                    style({ opacity: 0 }),
                    stagger(
                        500,
                        [
                            animate('2s ease-out', style({ opacity: 1 }))
                        ]
                    )
                ],
                { optional: true }
            ),
        ]
    ),
    transition(':decrement',
        [
            // query(':enter', style({ opacity: 0 }), { optional: true }),
            query(':leave',
                [
                    style({ opacity: 1 }),
                    stagger(
                        500,
                        [
                            animate('2s', style({ opacity: 0 }))
                        ]
                    )
                ],
                { optional: true }
            ),
        ]
    )
]);
