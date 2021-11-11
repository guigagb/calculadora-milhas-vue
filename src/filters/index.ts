import Vue from 'vue'

Vue.filter('money', function (value: any) {
    return value.toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL',
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    });
})

Vue.filter('numberBR', function (value: any) {
    return value.toLocaleString('pt-BR', {
        currency: 'BRL',
        maximumFractionDigits: 2
    });
})