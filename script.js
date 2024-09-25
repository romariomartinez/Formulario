let registros = [];

// Mostrar el formulario según la acción
function mostrarFormulario(accion) {
    const formulario = document.getElementById('formulario');
    const resultadoConsulta = document.getElementById('resultadoConsulta');
    resultadoConsulta.classList.add('d-none'); // Ocultar resultados anteriores
    let contenido = '';

    switch (accion) {
        case 'registrar':
            contenido = `
                <h2 class="text-center">Registrar Información</h2>
                <div class="form-group">
                    <input type="text" class="form-control" placeholder="Nombre" id="nombre">
                </div>
                <div class="form-group">
                    <input type="tel" class="form-control" placeholder="Teléfono" id="telefono">
                </div>
                <div class="form-group">
                    <select class="form-control" id="sexo">
                        <option value="">Seleccione Sexo</option>
                        <option value="M">Masculino</option>
                        <option value="F">Femenino</option>
                    </select>
                </div>
                <div class="form-group">
                    <input type="text" class="form-control" placeholder="País" id="pais">
                </div>
                <div class="form-group">
                    <input type="text" class="form-control" placeholder="Departamento" id="departamento">
                </div>
                <div class="form-group">
                    <input type="text" class="form-control" placeholder="Ciudad" id="ciudad">
                </div>
                <button class="btn btn-success btn-block btn-custom" onclick="registrar()">Registrar</button>
            `;
            break;
        case 'eliminar':
            contenido = `
                <h2 class="text-center">Eliminar Información</h2>
                <div class="form-group">
                    <input type="text" class="form-control" placeholder="Nombre" id="nombreEliminar">
                </div>
                <button class="btn btn-danger btn-block btn-custom" onclick="eliminar()">Eliminar</button>
            `;
            break;
        case 'actualizar':
            contenido = `
                <h2 class="text-center">Actualizar Información</h2>
                <div class="form-group">
                    <input type="text" class="form-control" placeholder="Nombre a Actualizar" id="nombreActualizar">
                </div>
                <div class="form-group">
                    <input type="tel" class="form-control" placeholder="Nuevo Teléfono" id="nuevoTelefono">
                </div>
                <div class="form-group">
                    <input type="text" class="form-control" placeholder="Nuevo País" id="nuevoPais">
                </div>
                <div class="form-group">
                    <input type="text" class="form-control" placeholder="Nuevo Departamento" id="nuevoDepartamento">
                </div>
                <div class="form-group">
                    <input type="text" class="form-control" placeholder="Nueva Ciudad" id="nuevaCiudad">
                </div>
                <button class="btn btn-warning btn-block btn-custom" onclick="actualizar()">Actualizar</button>
            `;
            break;
        case 'consultar':
            contenido = `
                <h2 class="text-center">Consultar Información</h2>
                <div class="form-group">
                    <input type="text" class="form-control" placeholder="Nombre" id="nombreConsultar">
                </div>
                <button class="btn btn-info btn-block btn-custom" onclick="consultar()">Consultar</button>
            `;
            break;
        default:
            contenido = '';
            break;
    }

    formulario.innerHTML = contenido;
    formulario.style.display = 'block';
}

// Registrar la información
function registrar() {
    const nombre = document.getElementById('nombre').value;
    const telefono = document.getElementById('telefono').value;
    const sexo = document.getElementById('sexo').value;
    const pais = document.getElementById('pais').value;
    const departamento = document.getElementById('departamento').value;
    const ciudad = document.getElementById('ciudad').value;

    if (nombre && telefono && sexo && pais && departamento && ciudad) {
        registros.push({ nombre, telefono, sexo, pais, departamento, ciudad });
        alert('Información registrada exitosamente.');
        document.getElementById('formulario').innerHTML = ''; // Limpiar el formulario
    } else {
        alert('Por favor, complete todos los campos.');
    }
}

// Eliminar la información
function eliminar() {
    const nombre = document.getElementById('nombreEliminar').value;
    registros = registros.filter(registro => registro.nombre !== nombre);
    alert(`Información de ${nombre} eliminada.`);
    document.getElementById('formulario').innerHTML = ''; // Limpiar el formulario
}

// Actualizar la información
function actualizar() {
    const nombre = document.getElementById('nombreActualizar').value;
    const nuevoTelefono = document.getElementById('nuevoTelefono').value;
    const nuevoPais = document.getElementById('nuevoPais').value;
    const nuevoDepartamento = document.getElementById('nuevoDepartamento').value;
    const nuevaCiudad = document.getElementById('nuevaCiudad').value;

    const index = registros.findIndex(registro => registro.nombre === nombre);
    if (index !== -1) {
        registros[index].telefono = nuevoTelefono || registros[index].telefono;
        registros[index].pais = nuevoPais || registros[index].pais;
        registros[index].departamento = nuevoDepartamento || registros[index].departamento;
        registros[index].ciudad = nuevaCiudad || registros[index].ciudad;
        alert('Información actualizada.');
        document.getElementById('formulario').innerHTML = ''; // Limpiar el formulario
    } else {
        alert('Nombre no encontrado.');
    }
}

// Consultar la información
function consultar() {
    const nombre = document.getElementById('nombreConsultar').value;
    const resultado = registros.find(registro => registro.nombre === nombre);
    const resultadoConsulta = document.getElementById('resultadoConsulta');

    if (resultado) {
        resultadoConsulta.innerHTML = `
            <h4>Resultado de la Consulta:</h4>
            <p><strong>Nombre:</strong> ${resultado.nombre}</p>
            <p><strong>Teléfono:</strong> ${resultado.telefono}</p>
            <p><strong>Sexo:</strong> ${resultado.sexo}</p>
            <p><strong>País:</strong> ${resultado.pais}</p>
            <p><strong>Departamento:</strong> ${resultado.departamento}</p>
            <p><strong>Ciudad:</strong> ${resultado.ciudad}</p>
        `;
    } else {
        resultadoConsulta.innerHTML = `
            <h4>Resultado de la Consulta:</h4>
            <p>No se encontró información para el nombre: <strong>${nombre}</strong></p>
        `;
    }
    resultadoConsulta.classList.remove('d-none'); // Mostrar resultados
}
