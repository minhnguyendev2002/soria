import Vue from 'vue';
import ConfirmDialog from '@/components/shared/ConfirmDialog.vue';
import CurrencyInput from '@/components/shared/CurrencyInput.vue';
import DatePicker from '@/components/shared/DatePicker.vue';
import Pagination from '@/components/shared/Pagination.vue';

const components = [{
    name: 'ct-confirm-dialog',
    component: ConfirmDialog,
}, {
    name: 'ct-currency-input',
    component: CurrencyInput,
}, {
    name: 'ct-date-picker',
    component: DatePicker,
}, {
    name: 'ct-pagination',
    component: Pagination,
}];

components.forEach(({ name, component }) => {
    Vue.component(name, component);
});
