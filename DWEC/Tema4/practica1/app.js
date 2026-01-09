/**
 * GESTIÓN DE RESERVAS Y EMPLEADOS - PRÁCTICA TEMA 4
 * Autor: Estudiante DAW
 * Descripción: Lógica de negocio usando ES6+ y Programación Funcional.
 */

// ==========================================
// 1. ARQUITECTURA DE DATOS Y CLASES
// ==========================================

/**
 * Clase que representa una habitación del hotel.
 */
/**
 * Clase que representa una habitación del hotel.
 */
class Habitacion {
    /**
     * Constructor de Habitacion
     * @param {number} id - Identificador único. JUSTIFICACIÓN: Esencial para diferenciar habitaciones y permitir búsquedas rápidas con .find() sin ambigüedad.
     * @param {string} tipo - Tipo de habitación. JUSTIFICACIÓN: Permite categorizar y filtrar las habitaciones según las preferencias del cliente (Suite, Doble, etc.).
     * @param {number} precio - Precio por noche. JUSTIFICACIÓN: Necesario para realizar cálculos matemáticos de ingresos totales usando .reduce().
     * @param {string} imagen - URL de la imagen. JUSTIFICACIÓN: Mejora la experiencia de usuario (UX) al mostrar visualmente lo que se está reservando.
     */
    constructor(id, tipo, precio, imagen) {
        this.id = id;
        this.tipo = tipo;
        this.precio = precio;
        this.imagen = imagen;
        // JUSTIFICACIÓN: Usamos un array de fechas en lugar de un booleano simple para permitir reservas futuras y gestión de calendario real.
        this.reservas = [];
    }

    /**
     * Comprueba si la habitación está reservada en una fecha específica.
     * @param {string} fecha - Fecha en formato YYYY-MM-DD
     * @returns {boolean}
     */
    estaReservada(fecha) {
        return this.reservas.includes(fecha);
    }

    /**
     * Reserva la habitación para una fecha si no está ocupada.
     * @param {string} fecha 
     */
    reservar(fecha) {
        if (!this.estaReservada(fecha)) {
            this.reservas.push(fecha);
        }
    }

    /**
     * Cancela la reserva para una fecha específica.
     * @param {string} fecha 
     */
    cancelarReserva(fecha) {
        this.reservas = this.reservas.filter(f => f !== fecha);
    }
}

/**
 * Clase que representa un empleado del hotel.
 */
class Empleado {
    /**
     * Constructor de Empleado
     * @param {number} id - Identificador único. JUSTIFICACIÓN: Clave primaria para gestión inequívoca del personal.
     * @param {string} nombre - Nombre completo. JUSTIFICACIÓN: Dato básico para mostrar en el directorio y búsquedas.
     * @param {string} puesto - Cargo. JUSTIFICACIÓN: Permite filtrar empleados por departamento o función.
     * @param {number} salario - Salario mensual. JUSTIFICACIÓN: Dato numérico requerido para el cálculo de la nómina total mediante programación funcional.
     */
    constructor(id, nombre, puesto, salario) {
        this.id = id;
        this.nombre = nombre;
        this.puesto = puesto;
        this.salario = salario;
    }
}

// ==========================================
// 2. DATOS INICIALES
// ==========================================

// ==========================================
// 2. DATOS INICIALES (SIMULACIÓN JSON)
// ==========================================

// Datos en formato JSON puro (sin instancias de clases) para simular una respuesta de API o archivo externo
const INITIAL_JSON = {
    "habitaciones": [
        { "id": 101, "tipo": "Suite de Lujo", "precio": 150, "imagen": "https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&w=800&q=80" },
        { "id": 102, "tipo": "Doble Estándar", "precio": 80, "imagen": "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=800&q=80" },
        { "id": 103, "tipo": "Individual Confort", "precio": 60, "imagen": "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=800&q=80" },
        { "id": 104, "tipo": "Suite Presidencial", "precio": 250, "imagen": "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80" },
        { "id": 105, "tipo": "Doble Superior", "precio": 100, "imagen": "https://images.unsplash.com/photo-1591088398332-8a7791972843?auto=format&fit=crop&w=800&q=80" },
        { "id": 106, "tipo": "Individual Económica", "precio": 45, "imagen": "https://images.unsplash.com/photo-1505693416388-b0346ef41741?auto=format&fit=crop&w=800&q=80" },
        { "id": 107, "tipo": "Suite de Lujo", "precio": 150, "imagen": "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=800&q=80" },
        { "id": 108, "tipo": "Doble Estándar", "precio": 80, "imagen": "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=800&q=80" }
    ],
    "empleados": [
        { "id": 1, "nombre": "Ana García", "puesto": "Recepcionista", "salario": 1500 },
        { "id": 2, "nombre": "Carlos López", "puesto": "Gerente", "salario": 2800 },
        { "id": 3, "nombre": "Lucía Méndez", "puesto": "Limpieza", "salario": 1200 },
        { "id": 4, "nombre": "Marcos Ruiz", "puesto": "Mantenimiento", "salario": 1400 },
        { "id": 5, "nombre": "Elena Torres", "puesto": "Chef", "salario": 2000 }
    ]
};

// Helper para obtener la fecha de hoy en formato YYYY-MM-DD
const getTodayString = () => new Date().toISOString().split('T')[0];

// Función para inicializar los datos convirtiendo el JSON en instancias de clases
const inicializarDatos = () => {
    const habitaciones = INITIAL_JSON.habitaciones.map(h => new Habitacion(h.id, h.tipo, h.precio, h.imagen));
    const empleados = INITIAL_JSON.empleados.map(e => new Empleado(e.id, e.nombre, e.puesto, e.salario));
    return { habitaciones, empleados };
};

const datosApp = inicializarDatos();

const appState = {
    habitaciones: datosApp.habitaciones,
    empleados: datosApp.empleados,
    filtroTipo: 'todas',
    soloDisponibles: false,
    filtroBusquedaEmpleado: '',
    fechaSeleccionada: getTodayString() // Fecha por defecto: Hoy
};

// ==========================================
// 3. LÓGICA DE NEGOCIO
// ==========================================

// Calcula ingresos totales históricos (suma de todos los días reservados)
const calcularIngresosTotales = () => {
    return appState.habitaciones.reduce((total, h) => {
        return total + (h.reservas.length * h.precio);
    }, 0);
};

const calcularNominaTotal = () => {
    return appState.empleados.reduce((total, emp) => total + emp.salario, 0);
};

const obtenerHabitacionesFiltradas = () => {
    return appState.habitaciones.filter(h => {
        const coincideTipo = appState.filtroTipo === 'todas' || h.tipo === appState.filtroTipo;

        // Disponibilidad depende de la fecha seleccionada
        const estaOcupadaEnFecha = h.estaReservada(appState.fechaSeleccionada);
        const coincideEstado = !appState.soloDisponibles || !estaOcupadaEnFecha;

        return coincideTipo && coincideEstado;
    });
};

const obtenerEmpleadosFiltrados = () => {
    const query = appState.filtroBusquedaEmpleado.toLowerCase();
    return appState.empleados.filter(emp =>
        emp.nombre.toLowerCase().includes(query) ||
        emp.puesto.toLowerCase().includes(query)
    );
};

const buscarHabitacionPorId = (id) => {
    return appState.habitaciones.find(h => h.id === id);
};

// ==========================================
// 4. FUNCIONES DE RENDERIZADO
// ==========================================

const renderDashboard = () => {
    const ingresos = calcularIngresosTotales();
    const nomina = calcularNominaTotal();

    // Ocupación para la fecha seleccionada
    const ocupadasHoy = appState.habitaciones.filter(h => h.estaReservada(appState.fechaSeleccionada)).length;
    const totalHab = appState.habitaciones.length;

    const dashboardHTML = `
        <div class="stat-card">
            Ingresos Totales (Reservas): <span class="stat-value">${ingresos}€</span>
        </div>
        <div class="stat-card">
            Nómina Total: <span class="stat-value">${nomina}€</span>
        </div>
        <div class="stat-card">
            Ocupación (${appState.fechaSeleccionada}): <span class="stat-value">${ocupadasHoy}/${totalHab}</span>
        </div>
    `;

    document.getElementById('dashboard-stats').innerHTML = dashboardHTML;
};

const renderOpcionesTipo = () => {
    const select = document.getElementById('filtro-tipo');
    const tiposUnicos = [...new Set(appState.habitaciones.map(h => h.tipo))];
    const opcionesHTML = `<option value="todas">Todos los tipos</option>` +
        tiposUnicos.map(tipo => `<option value="${tipo}">${tipo}</option>`).join('');

    select.innerHTML = opcionesHTML;
    select.value = appState.filtroTipo;
};

const renderHabitaciones = () => {
    const contenedor = document.getElementById('lista-habitaciones');
    const habitacionesAMostrar = obtenerHabitacionesFiltradas();

    contenedor.innerHTML = '';

    if (habitacionesAMostrar.length === 0) {
        contenedor.innerHTML = '<p style="grid-column: 1/-1; text-align: center; color: var(--text-muted);">No hay habitaciones disponibles para los filtros seleccionados.</p>';
        return;
    }

    const htmlContent = habitacionesAMostrar.map(habitacion => {
        // Estado depende de la fecha seleccionada
        const esOcupada = habitacion.estaReservada(appState.fechaSeleccionada);

        const claseEstado = esOcupada ? 'estado-ocupada' : 'estado-libre';
        // Botón cambia según si ya está reservada ese día
        const textoBoton = esOcupada ? 'Cancelar Reserva' : 'Reservar';
        const accionBoton = esOcupada ? 'cancelar' : 'reservar';
        const estadoTexto = esOcupada ? 'OCUPADA' : 'DISPONIBLE';
        const colorBoton = esOcupada ? '#ef4444' : '#8e44ad'; // Rojo para cancelar, Morado para reservar

        return `
            <article class="habitacion-card">
                <div class="card-image">
                    <img src="${habitacion.imagen}" alt="${habitacion.tipo}">
                    <span class="estado-badge ${claseEstado}">${estadoTexto}</span>
                </div>
                <div class="card-content">
                    <h3 class="card-title">${habitacion.tipo}</h3>
                    <p class="card-price">${habitacion.precio}€ <span style="font-size:0.8rem; font-weight:400; color:#666">/ noche</span></p>
                    <p style="font-size: 0.85rem; color: #64748b; margin-bottom: 1rem;">
                        Habitación #${habitacion.id} <br>
                        <small>Fecha: ${appState.fechaSeleccionada}</small>
                    </p>
                    <button 
                        class="btn-reservar" 
                        onclick="window.gestionarReserva(${habitacion.id}, '${accionBoton}')"
                        style="background-color: ${colorBoton}"
                    >
                        ${textoBoton}
                    </button>
                </div>
            </article>
        `;
    }).join('');

    contenedor.innerHTML = htmlContent;
};

const renderEmpleados = () => {
    const contenedor = document.getElementById('lista-empleados');
    const empleadosAMostrar = obtenerEmpleadosFiltrados();

    contenedor.innerHTML = '';

    if (empleadosAMostrar.length === 0) {
        contenedor.innerHTML = '<tr><td colspan="5" style="text-align:center; padding: 2rem;">No se encontraron empleados</td></tr>';
        return;
    }

    const htmlRows = empleadosAMostrar.map(emp => `
        <tr>
            <td>#${emp.id}</td>
            <td><strong>${emp.nombre}</strong></td>
            <td><span style="background:#e0f2fe; color:#0369a1; padding:2px 8px; border-radius:4px; font-size:0.85rem">${emp.puesto}</span></td>
            <td>${emp.salario}€</td>
            <td><span style="color:#10b981">● Activo</span></td>
        </tr>
    `).join('');

    contenedor.innerHTML = htmlRows;
};

const renderApp = () => {
    renderDashboard();
    renderHabitaciones();
    renderEmpleados();
};

// ==========================================
// 5. EVENT LISTENERS Y CONTROLADORES
// ==========================================

window.gestionarReserva = (id, accion) => {
    const habitacion = buscarHabitacionPorId(id);
    if (!habitacion) return;

    if (accion === 'reservar') {
        habitacion.reservar(appState.fechaSeleccionada);
    } else if (accion === 'cancelar') {
        habitacion.cancelarReserva(appState.fechaSeleccionada);
    }

    renderApp();
};

document.addEventListener('DOMContentLoaded', () => {
    // Inicializar fecha selector con hoy
    const fechaSelector = document.getElementById('fecha-selector');
    fechaSelector.value = appState.fechaSeleccionada;

    renderOpcionesTipo();
    renderApp();

    // Evento Cambio de Fecha
    fechaSelector.addEventListener('change', (e) => {
        appState.fechaSeleccionada = e.target.value;
        renderApp(); // Re-renderiza todo para mostrar disponibilidad de la nueva fecha
    });

    document.getElementById('buscador-empleados').addEventListener('input', (e) => {
        appState.filtroBusquedaEmpleado = e.target.value;
        renderEmpleados();
    });

    document.getElementById('filtro-tipo').addEventListener('change', (e) => {
        appState.filtroTipo = e.target.value;
        renderHabitaciones();
    });

    const btnDisponibles = document.getElementById('btn-ver-disponibles');
    btnDisponibles.addEventListener('click', () => {
        appState.soloDisponibles = !appState.soloDisponibles;

        if (appState.soloDisponibles) {
            btnDisponibles.classList.add('active');
            btnDisponibles.textContent = 'Ver Todas';
        } else {
            btnDisponibles.classList.remove('active');
            btnDisponibles.textContent = 'Ver Disponibles';
        }

        renderHabitaciones();
    });
});
