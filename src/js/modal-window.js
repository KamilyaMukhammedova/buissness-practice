const modalWindow = document.getElementById('modal-window');
const closeBtn = document.getElementById('close-modal-btn');
const openBtnMain = document.getElementById('open-modal-btn-main');
const userName = document.getElementById('user-name');
const userEmail = document.getElementById('user-email');
const userProblem = document.getElementById('user-problem');
const errorReqName = document.getElementById('user-name-req');
const errorReqEmail = document.getElementById('user-email-req');
const errorReqProblem = document.getElementById('user-problem-req');
const submitBtn = document.getElementById('submit-btn');
const form = document.getElementById('form');
const sendText = document.getElementById('send');
const sendingText = document.getElementById('sending');
const successText = document.getElementById('success-text');
const errorText = 'поле обязательно*';
const redColor = '#CF4747';
const blackColor = '#282C37';

export const clearFields = () => {
  userName.value = '';
  userEmail.value = '';
  userProblem.value = '';
  errorReqName.innerText = '';
  errorReqEmail.innerText = '';
  errorReqProblem.innerText = '';
  submitBtn.disabled = true;
  userName.style.borderColor = blackColor;
  userEmail.style.borderColor = blackColor;
  userProblem.style.borderColor = blackColor;
  successText.innerText = '';
  sendText.style.display = 'inline';
  sendingText.style.display = 'none';
};

const onUserNameListener = (eventName) => {
  if (userName) {
    userName.addEventListener(eventName, (event) => {
      if (event.target.value === '') {
        errorReqName.innerText = errorText;
        userName.style.borderColor = redColor;
        submitBtn.disabled = true;
      } else {
        errorReqName.innerText = '';
        userName.style.borderColor = blackColor;
        if (userEmail.value !== '' && userProblem.value !== '') {
          submitBtn.disabled = false;
        }
      }
    });
  }
};

const onUserEmailListener = (eventName) => {
  if (userEmail) {
    userEmail.addEventListener(eventName, (event) => {
      if (event.target.value === '') {
        errorReqEmail.innerText = errorText;
        userEmail.style.borderColor = redColor;
        submitBtn.disabled = true;
      } else {
        errorReqEmail.innerText = '';
        userEmail.style.borderColor = blackColor;
        if (userName.value !== '' && userProblem.value !== '') {
          submitBtn.disabled = false;
        }
      }
    });
  }
};

const onUserProblemListener = (eventName) => {
  if (userProblem) {
    userProblem.addEventListener(eventName, (event) => {
      if (event.target.value === '') {
        errorReqProblem.innerText = errorText;
        userProblem.style.borderColor = redColor;
        submitBtn.disabled = true;
      } else {
        errorReqProblem.innerText = '';
        userProblem.style.borderColor = blackColor;
        if (userName.value !== '' && userEmail.value !== '') {
          submitBtn.disabled = false;
        }
      }
    });
  }
};

window.addEventListener('click', (event) => {
  if (event.target === modalWindow) {
    modalWindow.style.display = 'none';
    clearFields();
  }
});

if (closeBtn) {
  closeBtn.addEventListener('click', () => {
    modalWindow.style.display = 'none';
    clearFields();
  });
}

if (openBtnMain) {
  openBtnMain.addEventListener('click', () => {
    modalWindow.style.display = 'block';
  });
}

if (form) {
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    submitBtn.classList.add('modal-window__btn-disabled');
    sendText.style.display = 'none';
    sendingText.style.display = 'inline';

    setTimeout(() => {
      userName.value = '';
      userEmail.value = '';
      userProblem.value = '';
      successText.innerText = 'Ваша заявка успешно отправлена!';
      submitBtn.classList.remove('modal-window__btn-disabled');
      sendText.style.display = 'inline';
      sendingText.style.display = 'none';
      submitBtn.disabled = true;
    }, 2000);
  });
}

onUserNameListener('blur');
onUserNameListener('input');
onUserEmailListener('blur');
onUserEmailListener('input');
onUserProblemListener('blur');
onUserProblemListener('input');
