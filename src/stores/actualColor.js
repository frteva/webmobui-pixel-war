import { useLocalStorage } from "../composables/useLocalStorage";

export const { value: actualColor} = useLocalStorage("actualColor", []);

export function addColor({color}) {
    actualColor.value.push({ color});
    console.log(actualColor.value)
}

export function removeColor(color) {
    const index = actualColor.value.indexOf(color);
    removeByIndex(index);
};

function removeByIndex(index){
    actualColor.value.splice(index,1)
}
