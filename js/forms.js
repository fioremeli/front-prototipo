/**
 * EXIMIA CODE · Validación accesible y envío nativo estándar
 */
(function () {
  'use strict';

  document.querySelectorAll('form').forEach(function (form) {
    const fields = Array.from(form.querySelectorAll('input[required], textarea[required]'));

    function setError(field, message) {
      const error = form.querySelector('#' + field.id + '-error');
      field.setAttribute('aria-invalid', message ? 'true' : 'false');
      if (error) error.textContent = message;
    }

    function validateField(field) {
      const value = field.value.trim();
      let message = '';

      if (!value) {
        message = 'Este campo es obligatorio.';
      } else if (field.type === 'email' && !field.validity.valid) {
        message = 'Ingresá un correo electrónico válido.';
      } else if (field.minLength > 0 && value.length < field.minLength) {
        message = 'Ingresá al menos ' + field.minLength + ' caracteres.';
      }

      setError(field, message);
      return message === '';
    }

    // Validar en tiempo real cuando el usuario sale de un campo (blur)
    fields.forEach(function (field) {
      field.setAttribute('aria-invalid', 'false');
      field.addEventListener('blur', function () {
        validateField(field);
      });
    });

    // Control al enviar el formulario
    form.addEventListener('submit', function (event) {
      const isValid = fields.map(validateField).every(Boolean);
      const status = form.querySelector('[data-form-status]');

      if (!isValid) {
        // Si hay errores, frenamos el envío y avisamos
        event.preventDefault();
        if (status) {
          status.className = 'form-status error';
          status.textContent = 'Por favor, revisá los campos marcados antes de enviar.';
        }
        form.querySelector('[aria-invalid="true"]')?.focus();
      } else {
        // Si es válido, NO usamos event.preventDefault(). 
        // El navegador enviará los datos de forma nativa a FormSubmit por POST sin errores de CORS.
        if (status) {
          status.className = 'form-status success';
          status.textContent = 'Enviando mensaje...';
        }
      }
    });
  });
})();
