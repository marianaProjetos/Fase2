document.addEventListener('DOMContentLoaded', function () {
  const inputData = document.getElementById('data');
  const hoje = new Date().toISOString().split('T')[0];
  inputData.min = hoje;
});

document.getElementById('formAgendamento').addEventListener('submit', function (e) {
  const horaInput = document.getElementById('hora');
  const hora = horaInput.value;

  if (hora) {
    if (hora < '08:00' || hora > '20:00') {
      alert('Por favor, selecione um horário entre 08:00 e 20:00.');
      e.preventDefault();
      horaInput.focus();
      return false;
    }
  }

  alert('Formulário enviado com sucesso!');
});
