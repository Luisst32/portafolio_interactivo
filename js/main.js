const root = document.documentElement;

function iniciarTema() {
    const boton = document.querySelector(".theme-toggle");
    if (!boton) return;

    const actualizarBoton = () => {
        const oscuro = root.dataset.theme === "dark";
        boton.setAttribute("aria-pressed", String(oscuro));
        boton.setAttribute("aria-label", oscuro ? "Activar tema claro" : "Activar tema oscuro");
    };

    boton.addEventListener("click", () => {
        root.dataset.theme = root.dataset.theme === "dark" ? "light" : "dark";
        try {
            localStorage.setItem("tema", root.dataset.theme);
        } catch (error) {
            console.warn("No se pudo guardar el tema");
        }
        actualizarBoton();
    });

    actualizarBoton();
}

function iniciarMenu() {
    const boton = document.querySelector(".navbar__toggle");
    const menu = document.getElementById("menu-principal");
    if (!boton || !menu) return;

    const cerrar = () => {
        menu.classList.remove("is-open");
        boton.setAttribute("aria-expanded", "false");
        boton.setAttribute("aria-label", "Abrir menú");
    };

    boton.addEventListener("click", () => {
        const abierto = menu.classList.toggle("is-open");
        boton.setAttribute("aria-expanded", String(abierto));
        boton.setAttribute("aria-label", abierto ? "Cerrar menú" : "Abrir menú");
    });

    menu.addEventListener("click", (evento) => {
        if (evento.target.closest("a")) cerrar();
    });

    document.addEventListener("keydown", (evento) => {
        if (evento.key === "Escape" && menu.classList.contains("is-open")) {
            cerrar();
            boton.focus();
        }
    });
}

function iniciarFormulario() {
    const form = document.getElementById("form-contacto");
    if (!form) return;

    const estado = form.querySelector(".form__status");
    const boton = form.querySelector('button[type="submit"]');
    const campos = [
        {
            input: form.elements.nombre,
            validar: (valor) => valor.length >= 3 || "Ingresa tu nombre (mínimo 3 caracteres).",
        },
        {
            input: form.elements.email,
            validar: (valor) => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(valor) || "Ingresa un correo electrónico válido.",
        },
        {
            input: form.elements.mensaje,
            validar: (valor) => valor.length >= 10 || "El mensaje debe tener al menos 10 caracteres.",
        },
    ];

    const validarCampo = ({ input, validar }) => {
        const resultado = validar(input.value.trim());
        const error = document.getElementById(input.getAttribute("aria-describedby"));
        const valido = resultado === true;

        input.classList.toggle("is-invalid", !valido);
        input.setAttribute("aria-invalid", String(!valido));
        error.textContent = valido ? "" : resultado;
        return valido;
    };

    const mostrarEstado = (texto, tipo) => {
        estado.textContent = texto;
        estado.className = `form__status form__status--${tipo}`;
    };

    campos.forEach((campo) => {
        campo.input.addEventListener("blur", () => validarCampo(campo));
    });

    form.addEventListener("submit", async (evento) => {
        evento.preventDefault();

        const validos = campos.map(validarCampo);
        if (validos.includes(false)) {
            mostrarEstado("Revisa los campos marcados.", "error");
            return;
        }

        boton.disabled = true;
        boton.textContent = "Enviando...";

        try {
            const endpoint = form.action.replace("formsubmit.co/", "formsubmit.co/ajax/");
            const respuesta = await fetch(endpoint, {
                method: "POST",
                headers: { "Content-Type": "application/json", Accept: "application/json" },
                body: JSON.stringify(Object.fromEntries(new FormData(form))),
            });
            const datos = await respuesta.json();

            if (!respuesta.ok || String(datos.success) !== "true") {
                throw new Error(datos.message);
            }

            form.reset();
            mostrarEstado("¡Gracias! Tu mensaje fue enviado. Te responderé pronto.", "success");
        } catch (error) {
            mostrarEstado("No se pudo enviar el mensaje. Inténtalo de nuevo o escríbeme a luis123master@gmail.com.", "error");
        } finally {
            boton.disabled = false;
            boton.textContent = "Enviar mensaje";
        }
    });
}

iniciarTema();
iniciarMenu();
iniciarFormulario();
