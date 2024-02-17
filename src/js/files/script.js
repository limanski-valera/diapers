// Підключення функціоналу "Чертоги Фрілансера"
import { isMobile } from "./functions.js";
// Підключення списку активних модулів
import { flsModules } from "./modules.js";

function initLanguageSelector() {
    if (document.querySelector(".language-selector")) {
        const wrapper = document.querySelector(".language-selector");
        const button = wrapper.querySelector(".language-selector__title");
        const body = wrapper.querySelector(".language-selector__body");
        const activeClass = "opened";

        document.addEventListener("click", (e) => {
            if (
                wrapper.classList.contains(activeClass) &&
                !e.target.closest(".language-selector__body")
            ) {
                wrapper.classList.remove(activeClass);
            } else if (
                e.target.closest(".language-selector__title") &&
                !wrapper.classList.contains(activeClass)
            ) {
                wrapper.classList.add(activeClass);
            }
        });
    }
}

window.addEventListener("DOMContentLoaded", () => {
    initLanguageSelector();
});
