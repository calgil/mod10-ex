import VISA_ICON from './cc-assets/visa.png';
import AMERICAN_EXPRESS_ICON from './cc-assets/amex.png'
import MASTER_CARD_ICON from './cc-assets/masterCard.png';
import DISCOVER_ICON from './cc-assets/discover.png';

export const OTHERCARDS = [
    /[1-9]/,
    /\d/,
    /\d/,
    /\d/,
    ' ',
    /\d/,
    /\d/,
    /\d/,
    /\d/,
    ' ',
    /\d/,
    /\d/,
    /\d/,
    /\d/,
    ' ',
    /\d/,
    /\d/,
    /\d/,
    /\d/,
];

export const CARD = [
    'VISA',
    'MASTERCARD',
    'AMERICAN-EXPRESS',
    'DISCOVER',
];

export const CARDICON = {
        VISA: VISA_ICON,
        MASTERCARD: MASTER_CARD_ICON,
        AMERICAN_EXPRESS: AMERICAN_EXPRESS_ICON,
        DISCOVER: DISCOVER_ICON 
};