const opciones = ["piedra", "papel", "tijeras"];
        const iconos = {
            piedra: "🥌",
            papel: "🧻",
            tijeras: "✂"
        };

        document.querySelectorAll(".icon").forEach(function (element) {
            element.addEventListener("click", function () {
                const seleccionUsuario = this.id;
                const seleccionMaquina = opciones[Math.floor(Math.random() * 3)];

                const resultado = determinarResultado(seleccionUsuario, seleccionMaquina);
                const mensajeResultado = `Tú eliges: ${iconos[seleccionUsuario]}<br>La máquina eligió: ${iconos[seleccionMaquina]}<br>${resultado}`;

                document.getElementById("resultado").innerHTML = mensajeResultado;
            });
        });

        function determinarResultado(usuario, maquina) {
            if (usuario === maquina) {
                return "¡Empate!";
            } else if (
                (usuario === "piedra" && maquina === "tijeras") ||
                (usuario === "papel" && maquina === "piedra") ||
                (usuario === "tijeras" && maquina === "papel")
            ) {
                return "¡Ganaste!";
            } else {
                return "¡Perdiste!";
            }
        }