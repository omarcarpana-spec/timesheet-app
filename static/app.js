// ─── i18n ────────────────────────────────────────────────
const T = {
  es: {
    loginSub:     'Selecciona tu nombre e ingresa tu PIN',
    selectName:   '— Selecciona tu nombre —',
    pinAccess:    'PIN de acceso',
    pinWrong:     'PIN incorrecto. Intenta de nuevo.',
    newEmployee:  '¿Primera vez? Regístrate aquí',
    adminAccess:  'Acceso Administrador',
    registerTitle:'Crear Perfil',
    step1Label:   'Tu información',
    step2Label:   'Elige tu PIN de 4 dígitos',
    newPin:       'Nuevo PIN',
    confirmPin:   'Confirmar PIN',
    next:         'Siguiente →',
    back:         '← Volver',
    adminTitle:   'Administrador',
    adminPass:    'Contraseña de administrador',
    enter:        'Entrar ✓',
    passWrong:    'Contraseña incorrecta.',
    logout:       'Salir',
    today:        'Hoy (h)',
    week:         'Semana (h)',
    month:        'Mes (h)',
    myHistory:    'Mi Historial de Horas',
    date:         'Fecha',
    clockIn:      'Entrada',
    clockOut:     'Salida',
    hours:        'Horas',
    notes:        'Notas',
    noHistory:    'Sin registros aún',
    working:      'Actualmente trabajando',
    notClockedIn: 'Sin entrada activa',
    btnIn:        'Registrar Entrada',
    btnOut:       'Registrar Salida',
    since:        'Desde',
    elapsed:      'transcurrido',
    employees:    'Empleados',
    reports:      'Reportes',
    newEmployee2: 'Nuevo Empleado',
    employeeList: 'Lista de Empleados',
    name:         'Nombre',
    phone:        'Teléfono',
    address:      'Dirección',
    actions:      'Acciones',
    save:         'Guardar',
    cancel:       'Cancelar',
    filters:      'Filtros',
    allEmployees: 'Todos los empleados',
    search:       'Buscar',
    exportExcel:  'Exportar Excel',
    employee:     'Empleado',
    records:      'Registros',
    totalHours:   'Horas totales',
    noResults:    'Sin resultados',
    noEmployees:  'No hay empleados',
    edit:         'Editar',
    delete:       'Eliminar',
    confirmDelete:'¿Eliminar a {name}? Se borrarán todos sus registros.',
    phName:       'Nombre completo *',
    phEmail:      'Email *',
    phPhone:      'Teléfono',
    phAddress:    'Dirección',
    phPin:        'PIN (4 dígitos) *',
    phNotes:      'Notas (opcional)',
    phPassword:   'Contraseña',
    toastIn:      'Entrada registrada ✓',
    toastOut:     'Salida registrada ✓',
    toastSaved:   'Empleado guardado ✓',
    toastUpdated: 'Empleado actualizado ✓',
    toastDeleted: 'Empleado eliminado',
    errNameEmail: 'Nombre y email son obligatorios',
    errPin4:      'El PIN debe tener al menos 4 dígitos',
    errPinMatch:  'Los PINs no coinciden',
    errSelectName:'Selecciona tu nombre primero',
    errPin4digit: 'Ingresa tu PIN de 4 dígitos',
    registerOk:   '¡Registro exitoso! Bienvenido/a',
  },
  en: {
    loginSub:     'Select your name and enter your PIN',
    selectName:   '— Select your name —',
    pinAccess:    'Access PIN',
    pinWrong:     'Wrong PIN. Please try again.',
    newEmployee:  'First time? Register here',
    adminAccess:  'Administrator Access',
    registerTitle:'Create Profile',
    step1Label:   'Your information',
    step2Label:   'Choose your 4-digit PIN',
    newPin:       'New PIN',
    confirmPin:   'Confirm PIN',
    next:         'Next →',
    back:         '← Back',
    adminTitle:   'Administrator',
    adminPass:    'Administrator password',
    enter:        'Enter ✓',
    passWrong:    'Wrong password.',
    logout:       'Log out',
    today:        'Today (h)',
    week:         'Week (h)',
    month:        'Month (h)',
    myHistory:    'My Hours History',
    date:         'Date',
    clockIn:      'Clock In',
    clockOut:     'Clock Out',
    hours:        'Hours',
    notes:        'Notes',
    noHistory:    'No records yet',
    working:      'Currently working',
    notClockedIn: 'Not clocked in',
    btnIn:        'Clock In',
    btnOut:       'Clock Out',
    since:        'Since',
    elapsed:      'elapsed',
    employees:    'Employees',
    reports:      'Reports',
    newEmployee2: 'New Employee',
    employeeList: 'Employee List',
    name:         'Name',
    phone:        'Phone',
    address:      'Address',
    actions:      'Actions',
    save:         'Save',
    cancel:       'Cancel',
    filters:      'Filters',
    allEmployees: 'All employees',
    search:       'Search',
    exportExcel:  'Export Excel',
    employee:     'Employee',
    records:      'Records',
    totalHours:   'Total hours',
    noResults:    'No results',
    noEmployees:  'No employees',
    edit:         'Edit',
    delete:       'Delete',
    confirmDelete:'Delete {name}? All their records will be removed.',
    phName:       'Full name *',
    phEmail:      'Email *',
    phPhone:      'Phone',
    phAddress:    'Address',
    phPin:        'PIN (4 digits) *',
    phNotes:      'Notes (optional)',
    phPassword:   'Password',
    toastIn:      'Clocked in ✓',
    toastOut:     'Clocked out ✓',
    toastSaved:   'Employee saved ✓',
    toastUpdated: 'Employee updated ✓',
    toastDeleted: 'Employee deleted',
    errNameEmail: 'Name and email are required',
    errPin4:      'PIN must be at least 4 digits',
    errPinMatch:  'PINs do not match',
    errSelectName:'Select your name first',
    errPin4digit: 'Enter your 4-digit PIN',
    registerOk:   'Registration successful! Welcome',
  }
};

let lang = localStorage.getItem('go_lang') || 'es';

function t(key) { return (T[lang] && T[lang][key]) || T.es[key] || key; }

function setLang(l) {
  lang = l;
  localStorage.setItem('go_lang', l);
  applyTranslations();
  updateLangButtons();
  // refresh dynamic content
  if (!document.getElementById('screen-dashboard').classList.contains('hidden')) {
    refreshClockStatus();
    loadMyHistory();
  }
}

function applyTranslations() {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    el.textContent = t(key);
  });
  document.querySelectorAll('[data-i18n-ph]').forEach(el => {
    el.placeholder = t(el.getAttribute('data-i18n-ph'));
  });
  // first option of login select
  const firstOpt = document.querySelector('#login-emp-select option[value=""]');
  if (firstOpt) firstOpt.textContent = t('selectName');
  const firstOptR = document.querySelector('#report-emp option[value=""]');
  if (firstOptR) firstOptR.textContent = t('allEmployees');
}

function updateLangButtons() {
  ['es','en'].forEach(l => {
    ['lang','rlang','alang','dlang','admlang'].forEach(prefix => {
      const btn = document.getElementById(prefix + '-' + l);
      if (btn) btn.classList.toggle('active', l === lang);
    });
  });
}

// ─── State ───────────────────────────────────────────────
let currentUser   = null;
let activeEntryId = null;
let clockTimer    = null;
let pinBuffer     = '';
let editingEmpId  = null;

// Register state
let regPin = '', regConfirm = '', regConfirming = false;

// ─── Helpers ─────────────────────────────────────────────
async function api(path, method = 'GET', body = null) {
  const opts = { method, headers: { 'Content-Type': 'application/json' } };
  if (body) opts.body = JSON.stringify(body);
  const res = await fetch('/api' + path, opts);
  const data = await res.json();
  if (!res.ok) throw new Error(data.detail || 'Error');
  return data;
}

function toast(msg, isError = false) {
  const el = document.getElementById('toast');
  el.textContent = msg;
  el.className = 'toast' + (isError ? ' error' : '');
  clearTimeout(toast._t);
  toast._t = setTimeout(() => el.classList.add('hidden'), 3000);
}

function fmtTime(iso) {
  if (!iso) return '—';
  return new Date(iso + (iso.endsWith('Z') ? '' : 'Z'))
    .toLocaleTimeString(lang === 'en' ? 'en-US' : 'es-MX', { hour: '2-digit', minute: '2-digit' });
}
function fmtDate(iso) {
  if (!iso) return '—';
  return new Date(iso + (iso.endsWith('Z') ? '' : 'Z'))
    .toLocaleDateString(lang === 'en' ? 'en-US' : 'es-MX', { day: '2-digit', month: '2-digit', year: 'numeric' });
}
function initials(name) {
  return name.split(' ').slice(0,2).map(w => w[0]).join('').toUpperCase();
}

function showScreen(id) {
  document.querySelectorAll('.screen').forEach(s => s.classList.add('hidden'));
  document.getElementById(id).classList.remove('hidden');
  applyTranslations();
}

// ─── Login ───────────────────────────────────────────────
async function initLogin() {
  const emps = await api('/employees');
  const sel = document.getElementById('login-emp-select');
  sel.innerHTML = `<option value="">${t('selectName')}</option>`;
  emps.forEach(e => sel.innerHTML += `<option value="${e.id}">${e.name}</option>`);
  pinBuffer = '';
  updatePinDots('d', 4, pinBuffer);
  document.getElementById('login-error').classList.add('hidden');
}

function pinKey(k) {
  if (k === 'back') { pinBuffer = pinBuffer.slice(0,-1); }
  else if (pinBuffer.length < 4) { pinBuffer += k; }
  updatePinDots('d', 4, pinBuffer);
  if (pinBuffer.length === 4) doLogin();
}

function updatePinDots(prefix, total, buf) {
  for (let i = 0; i < total; i++) {
    const dot = document.getElementById(prefix + i);
    if (dot) dot.className = 'pin-dot' + (i < buf.length ? ' filled' : '');
  }
}

async function doLogin() {
  const emp_id = parseInt(document.getElementById('login-emp-select').value);
  if (!emp_id) { toast(t('errSelectName'), true); return; }
  if (pinBuffer.length < 4) { toast(t('errPin4digit'), true); return; }
  try {
    const emp = await api('/login', 'POST', { employee_id: emp_id, pin: pinBuffer });
    currentUser = emp;
    pinBuffer = '';
    updatePinDots('d', 4, '');
    document.getElementById('login-error').classList.add('hidden');
    showScreen('screen-dashboard');
    loadDashboard();
  } catch {
    document.getElementById('login-error').classList.remove('hidden');
    pinBuffer = '';
    updatePinDots('d', 4, '');
  }
}

function showAdminLogin() {
  document.getElementById('admin-password-input').value = '';
  document.getElementById('admin-login-error').classList.add('hidden');
  showScreen('screen-admin-login');
}

async function doAdminLogin() {
  const pwd = document.getElementById('admin-password-input').value;
  try {
    await api('/admin-login', 'POST', { pin: pwd });
    document.getElementById('admin-password-input').value = '';
    document.getElementById('admin-login-error').classList.add('hidden');
    showScreen('screen-admin');
    adminTab('employees');
  } catch {
    document.getElementById('admin-login-error').classList.remove('hidden');
    document.getElementById('admin-password-input').value = '';
  }
}

function logout() {
  currentUser = null; activeEntryId = null;
  clearInterval(clockTimer);
  showScreen('screen-login');
  initLogin();
}

// ─── Register ────────────────────────────────────────────
function showRegister() {
  regPin = ''; regConfirm = ''; regConfirming = false;
  ['reg-name','reg-email','reg-phone','reg-address'].forEach(id => document.getElementById(id).value = '');
  updatePinDots('rp', 4, '');
  updatePinDots('rc', 4, '');
  document.getElementById('reg-step1').classList.remove('hidden');
  document.getElementById('reg-step2').classList.add('hidden');
  document.getElementById('reg-step1-error').classList.add('hidden');
  document.getElementById('reg-pin-error').classList.add('hidden');
  showScreen('screen-register');
}

function goStep2() {
  const name  = document.getElementById('reg-name').value.trim();
  const email = document.getElementById('reg-email').value.trim();
  const errEl = document.getElementById('reg-step1-error');
  if (!name || !email) {
    errEl.textContent = t('errNameEmail');
    errEl.classList.remove('hidden');
    return;
  }
  errEl.classList.add('hidden');
  document.getElementById('reg-step1').classList.add('hidden');
  document.getElementById('reg-step2').classList.remove('hidden');
  regPin = ''; regConfirm = ''; regConfirming = false;
  updatePinDots('rp', 4, '');
  updatePinDots('rc', 4, '');
}

function regPinKey(k) {
  if (!regConfirming) {
    // Entering new PIN
    if (k === 'back') { regPin = regPin.slice(0,-1); }
    else if (regPin.length < 4) { regPin += k; }
    updatePinDots('rp', 4, regPin);
    if (regPin.length === 4) { regConfirming = true; }
  } else {
    // Confirming PIN
    if (k === 'back') {
      if (regConfirm.length === 0) { regConfirming = false; regPin = ''; updatePinDots('rp', 4, ''); }
      else { regConfirm = regConfirm.slice(0,-1); }
    } else if (regConfirm.length < 4) { regConfirm += k; }
    updatePinDots('rc', 4, regConfirm);
  }
}

async function submitRegister() {
  const errEl = document.getElementById('reg-pin-error');
  if (regPin.length < 4) { errEl.textContent = t('errPin4'); errEl.classList.remove('hidden'); return; }
  if (regPin !== regConfirm) {
    errEl.textContent = t('errPinMatch'); errEl.classList.remove('hidden');
    regConfirm = ''; updatePinDots('rc', 4, ''); regConfirming = true;
    return;
  }
  errEl.classList.add('hidden');
  const payload = {
    name:    document.getElementById('reg-name').value.trim(),
    email:   document.getElementById('reg-email').value.trim(),
    phone:   document.getElementById('reg-phone').value.trim(),
    address: document.getElementById('reg-address').value.trim(),
    pin:     regPin,
  };
  try {
    const emp = await api('/register', 'POST', payload);
    toast(t('registerOk') + ', ' + emp.name + '!');
    currentUser = emp;
    showScreen('screen-dashboard');
    loadDashboard();
  } catch (e) {
    errEl.textContent = e.message; errEl.classList.remove('hidden');
  }
}

// ─── Dashboard ───────────────────────────────────────────
async function loadDashboard() {
  const u = currentUser;
  document.getElementById('nav-user-name').textContent = u.name;
  document.getElementById('profile-avatar').textContent = initials(u.name);
  document.getElementById('profile-name').textContent    = u.name;
  document.getElementById('profile-email').textContent   = u.email || '';
  document.getElementById('profile-phone').textContent   = u.phone   ? '📞 ' + u.phone   : '';
  document.getElementById('profile-address').textContent = u.address ? '📍 ' + u.address : '';
  applyTranslations();
  await refreshClockStatus();
  await loadMyHistory();
  await loadStats();
}

async function refreshClockStatus() {
  const status = await api('/my-status/' + currentUser.id);
  const btn       = document.getElementById('btn-clock-action');
  const statusTxt = document.getElementById('clock-status-text');
  const sinceTxt  = document.getElementById('clock-since');
  clearInterval(clockTimer);

  if (status.active) {
    activeEntryId = status.entry_id;
    btn.textContent = t('btnOut');
    btn.className   = 'btn-clock btn-clock-out';
    statusTxt.textContent = t('working');
    const inTime = new Date(status.clock_in + (status.clock_in.endsWith('Z') ? '' : 'Z'));
    const updateSince = () => {
      const diff = Math.floor((Date.now() - inTime) / 1000);
      const h = Math.floor(diff/3600), m = Math.floor((diff%3600)/60), s = diff%60;
      sinceTxt.textContent = `${t('since')} ${fmtTime(status.clock_in)} — ${String(h).padStart(2,'0')}:${String(m).padStart(2,'0')}:${String(s).padStart(2,'0')} ${t('elapsed')}`;
    };
    updateSince();
    clockTimer = setInterval(updateSince, 1000);
  } else {
    activeEntryId = null;
    btn.textContent = t('btnIn');
    btn.className   = 'btn-clock btn-clock-in';
    statusTxt.textContent = t('notClockedIn');
    sinceTxt.textContent  = '';
  }
}

async function toggleClock() {
  const notes = document.getElementById('dash-notes').value;
  try {
    if (activeEntryId) {
      await api('/clock-out', 'POST', { entry_id: activeEntryId });
      toast(t('toastOut'));
    } else {
      await api('/clock-in', 'POST', { employee_id: currentUser.id, notes });
      document.getElementById('dash-notes').value = '';
      toast(t('toastIn'));
    }
    await refreshClockStatus();
    await loadMyHistory();
    await loadStats();
  } catch (e) { toast(e.message, true); }
}

async function loadMyHistory() {
  const entries = await api('/my-history/' + currentUser.id);
  const tbody = document.querySelector('#my-history-table tbody');
  tbody.innerHTML = '';
  if (!entries.length) {
    tbody.innerHTML = `<tr><td colspan="5" style="text-align:center;color:#718096">${t('noHistory')}</td></tr>`;
    return;
  }
  entries.forEach(e => {
    tbody.innerHTML += `<tr>
      <td>${fmtDate(e.clock_in)}</td>
      <td>${fmtTime(e.clock_in)}</td>
      <td>${fmtTime(e.clock_out)}</td>
      <td><span class="badge">${e.hours} h</span></td>
      <td>${e.notes || '—'}</td>
    </tr>`;
  });
}

async function loadStats() {
  const entries = await api('/my-history/' + currentUser.id);
  const now = new Date();
  const weekStart = new Date(now); weekStart.setDate(now.getDate() - now.getDay());
  const monthStart = new Date(now.getFullYear(), now.getMonth(), 1);
  let today = 0, week = 0, month = 0;
  entries.forEach(e => {
    const d = new Date(e.clock_in + (e.clock_in.endsWith('Z') ? '' : 'Z'));
    if (d.toDateString() === now.toDateString()) today += e.hours;
    if (d >= weekStart)  week  += e.hours;
    if (d >= monthStart) month += e.hours;
  });
  document.getElementById('stat-today').textContent = today.toFixed(1);
  document.getElementById('stat-week').textContent  = week.toFixed(1);
  document.getElementById('stat-month').textContent = month.toFixed(1);
}

// ─── Admin ───────────────────────────────────────────────
function adminTab(name) {
  document.getElementById('admin-tab-employees').classList.toggle('hidden', name !== 'employees');
  document.getElementById('admin-tab-report').classList.toggle('hidden', name !== 'report');
  document.querySelectorAll('.nav-links button').forEach((b, i) =>
    b.classList.toggle('active', ['employees','report'][i] === name));
  if (name === 'employees') loadEmployeeList();
  if (name === 'report')    loadReportSelects();
}

async function loadEmployeeList() {
  const emps = await api('/employees');
  const tbody = document.querySelector('#emp-table tbody');
  tbody.innerHTML = '';
  if (!emps.length) {
    tbody.innerHTML = `<tr><td colspan="6" style="text-align:center;color:#718096">${t('noEmployees')}</td></tr>`;
    return;
  }
  emps.forEach(e => {
    tbody.innerHTML += `<tr>
      <td>${e.name}</td><td>${e.email}</td>
      <td>${e.phone||'—'}</td><td>${e.address||'—'}</td>
      <td><code>${e.pin}</code></td>
      <td>
        <button class="btn-edit"   onclick="editEmployee(${e.id})">${t('edit')}</button>
        <button class="btn-danger" onclick="deleteEmployee(${e.id},'${e.name.replace(/'/g,"\\'")}')">
          ${t('delete')}
        </button>
      </td>
    </tr>`;
  });
}

async function saveEmployee() {
  const name    = document.getElementById('emp-name').value.trim();
  const email   = document.getElementById('emp-email').value.trim();
  const phone   = document.getElementById('emp-phone').value.trim();
  const address = document.getElementById('emp-address').value.trim();
  const pin     = document.getElementById('emp-pin').value.trim();
  if (!name || !email) { toast(t('errNameEmail'), true); return; }
  if (!pin || pin.length < 4) { toast(t('errPin4'), true); return; }
  try {
    if (editingEmpId) {
      await api(`/employees/${editingEmpId}`, 'PUT', { name, email, phone, address, pin });
      toast(t('toastUpdated'));
    } else {
      await api('/employees', 'POST', { name, email, phone, address, pin });
      toast(t('toastSaved'));
    }
    cancelEdit(); loadEmployeeList();
  } catch (e) { toast(e.message, true); }
}

async function editEmployee(id) {
  const emp = await api(`/employees/${id}`);
  editingEmpId = id;
  document.getElementById('emp-name').value    = emp.name;
  document.getElementById('emp-email').value   = emp.email;
  document.getElementById('emp-phone').value   = emp.phone || '';
  document.getElementById('emp-address').value = emp.address || '';
  document.getElementById('emp-pin').value     = emp.pin || '';
  document.getElementById('emp-form-title').textContent = t('edit') + ' ' + emp.name;
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

async function deleteEmployee(id, name) {
  if (!confirm(t('confirmDelete').replace('{name}', name))) return;
  try {
    await api(`/employees/${id}`, 'DELETE');
    toast(t('toastDeleted'));
    loadEmployeeList();
  } catch (e) { toast(e.message, true); }
}

function cancelEdit() {
  editingEmpId = null;
  ['emp-name','emp-email','emp-phone','emp-address','emp-pin'].forEach(id =>
    document.getElementById(id).value = '');
  document.getElementById('emp-form-title').textContent = t('newEmployee2');
}

async function loadReportSelects() {
  const emps = await api('/employees');
  const sel = document.getElementById('report-emp');
  sel.innerHTML = `<option value="">${t('allEmployees')}</option>`;
  emps.forEach(e => sel.innerHTML += `<option value="${e.id}">${e.name}</option>`);
  loadReport();
}

async function loadReport() {
  const emp_id    = document.getElementById('report-emp').value;
  const date_from = document.getElementById('report-from').value;
  const date_to   = document.getElementById('report-to').value;
  let qs = [];
  if (emp_id)    qs.push(`employee_id=${emp_id}`);
  if (date_from) qs.push(`date_from=${date_from}`);
  if (date_to)   qs.push(`date_to=${date_to}`);
  const data = await api('/report' + (qs.length ? '?' + qs.join('&') : ''));
  const total  = data.reduce((s,e) => s + e.hours, 0);
  const unique = new Set(data.map(e => e.employee_id)).size;
  document.getElementById('report-summary').innerHTML = `
    <div class="stat-box"><div class="val">${data.length}</div><div class="lbl">${t('records')}</div></div>
    <div class="stat-box"><div class="val">${total.toFixed(1)}</div><div class="lbl">${t('totalHours')}</div></div>
    <div class="stat-box"><div class="val">${unique}</div><div class="lbl">${t('employees')}</div></div>`;
  const tbody = document.querySelector('#report-table tbody');
  tbody.innerHTML = '';
  if (!data.length) {
    tbody.innerHTML = `<tr><td colspan="6" style="text-align:center;color:#718096">${t('noResults')}</td></tr>`;
    return;
  }
  data.forEach(e => {
    tbody.innerHTML += `<tr>
      <td>${e.employee_name}</td>
      <td>${fmtDate(e.clock_in)}</td>
      <td>${fmtTime(e.clock_in)}</td>
      <td>${fmtTime(e.clock_out)}</td>
      <td><span class="badge">${e.hours} h</span></td>
      <td>${e.notes||'—'}</td>
    </tr>`;
  });
}

function exportExcel() {
  const emp_id    = document.getElementById('report-emp').value;
  const date_from = document.getElementById('report-from').value;
  const date_to   = document.getElementById('report-to').value;
  let qs = [];
  if (emp_id)    qs.push(`employee_id=${emp_id}`);
  if (date_from) qs.push(`date_from=${date_from}`);
  if (date_to)   qs.push(`date_to=${date_to}`);
  window.location.href = '/api/export' + (qs.length ? '?' + qs.join('&') : '');
}

// ─── Init ────────────────────────────────────────────────
updateLangButtons();
applyTranslations();
showScreen('screen-login');
initLogin();
