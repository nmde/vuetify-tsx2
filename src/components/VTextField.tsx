import { ofType } from 'vue-tsx-support';

import {
  Colorable,
  CommonEvents,
  Disableable,
  Inputable,
  Maskable,
  Measurable,
  Themable,
  Validatable,
} from '../types';

export default ofType<Props, Events>().convert(
  require('vuetify/es5/components/VTextField').VTextField,
);

type Props = Colorable &
  Disableable &
  Inputable &
  Maskable &
  Measurable &
  Themable &
  Validatable & {
    appendOuterIcon?: Function;
    /** @deprecated */
    appendOuterIconCb?: Function;
    autofocus?: boolean;
    box?: boolean;
    browserAutocomplete?: string;
    clearIcon?: string;
    clearIconCb?: Function;
    clearable?: boolean;
    counter?: boolean | number | string;
    flat?: boolean;
    fullWidth?: boolean;
    loading?: boolean | string;
    outline?: boolean;
    name?: string;
    placeholder?: string;
    prefix?: string;
    prependInnerIcon?: string;
    /** @deprecated */
    prependInnerIconCb?: Function;
    reverse?: boolean;
    singleLine?: boolean;
    solo?: boolean;
    soloInverted?: boolean;
    suffix?: string;
    /** @deprecated */
    textarea?: boolean;
    type?: string;
  };

type Events = CommonEvents;
