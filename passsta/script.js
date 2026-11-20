const buttons = document.querySelectorAll('#buttonGroup button');
const heartFill = document.getElementById('heartFill');
const progressFill = document.getElementById('progressFill');
const statusText = document.getElementById('statusText');
const heartBox = document.getElementById('heartBox');
const finalMessage = document.getElementById('finalMessage');
const buttonGroup = document.getElementById('buttonGroup');

const totalSteps = buttons.length;

buttons.forEach((btn, index) => {
  btn.addEventListener('click', () => {
    const step = index + 1;

    btn.disabled = true;
    btn.classList.add('done');
    btn.textContent = '✓ ' + btn.textContent.slice(3);

    const percent = (step / totalSteps) * 100;
    progressFill.style.width = percent + '%';
    heartFill.setAttribute('y', 30 - (30 * (step / totalSteps)));
    statusText.textContent = `Desbloqueando... (${step}/${totalSteps})`;

    if (step < totalSteps) {
      buttons[step].disabled = false;
    } else {
      setTimeout(() => {
        statusText.textContent = 'Coração desbloqueado!';
        buttonGroup.style.display = 'none';
        heartBox.classList.add('unlocked');
        finalMessage.style.display = 'block';
      }, 500);
    }
  });
});
