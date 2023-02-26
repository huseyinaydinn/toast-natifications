const buttons = document.querySelectorAll('.buttons .btn');
const notifications = document.querySelector('.notifications');

const toastDetails = {
  timer: 5000,
  success: {
    icon: 'fa-circle-check',
    text: 'Success: This is a success toast.',
  },

  error: {
    icon: 'fa-circle-xmark',
    text: 'Error: This is a error toast.',
  },

  warning: {
    icon: 'fa-triangle-exclamation',
    text: 'Warning: This is a warning toast.',
  },

  info: {
    icon: 'fa-circle-info',
    text: 'Info: This is a info toast.',
  },
};

const removeToast = (toast) => {
  toast.classList.add('hide');
  setTimeout(() => toast.remove(), 500);
};

const createToast = (id) => {
  // Getting  the icon and text for the toast based on the id passed
  const { icon, text } = toastDetails[id];

  const toast = document.createElement('li');
  toast.className = `toast ${id}`;
  toast.innerHTML = `<div class="column">
  <i class="fa-solid ${icon}"></i>
  <span>${text}</span>
</div>
<i class="fa-solid fa-xmark" onclick="removeToast(this.parentElement)"></i>`;
  notifications.appendChild(toast);

  // remove after 5s
  setTimeout(() => removeToast(toast), toastDetails.timer);
};

buttons.forEach((btn) => {
  btn.addEventListener('click', () => createToast(btn.id));
});
