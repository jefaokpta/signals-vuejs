import {ref} from "vue";

const number = ref(0)

export function increment() {
    number.value++;
}

export function getNumber() {
    console.log('getNumber')
    return number.value;
}