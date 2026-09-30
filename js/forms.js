/**
 * EXIMIA CODE · Validación básica de formulario
 * Si pasa la validación, el formulario se envía de forma nativa por HTML/FormSubmit.
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

    fields.forEach(function (field) {
      field.setAttribute('aria-invalid', 'false');
      field.addEventListener('blur', function () {
        validateField(field);
      });
    });

    form.addEventListener('submit', function (event) {
      const isValid = fields.map(validateField).every(Boolean);
      
      if (!isValid) {
        event.preventDefault(); // Solo frena el envío si hay errores de validación
        const status = form.querySelector('[data-form-status]');
        if (status) {
          status.className = 'form-status error';
          status.textContent = 'Revisá los campos indicados antes de enviar.';
        }
        form.querySelector('[aria-invalid="true"]')?.focus();
      }
      // Si es válido, NO se hace preventDefault(), por lo que el formulario se envía sí o sí.
    });
  });
})();
