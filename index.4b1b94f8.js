var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t="object"==typeof e&&e&&e.Object===Object&&e,o="object"==typeof self&&self&&self.Object===Object&&self;t||o||Function("return this")(),Object.prototype.toString;const n="message",r={},a={form:document.querySelector(".form"),textarea:document.querySelector(".form textarea"),input:document.querySelector("input")};a.form.addEventListener("submit",function(e){e.preventDefault(),e.currentTarget.reset(),localStorage.removeItem(n)}),a.form.addEventListener("input",function(e){r[e.target.name]=e.target.value,localStorage.setItem(n,JSON.stringify(r))}),function(){let e=JSON.parse(localStorage.getItem(n));e?.message&&(a.textarea.value=e.message),e?.input&&(a.input.value=e.name)}();
//# sourceMappingURL=index.4b1b94f8.js.map