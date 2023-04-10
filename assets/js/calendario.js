// Obtenha a lista de checkboxes de recursos
const resourceCheckboxes = document.querySelectorAll('input[name="resources"]');

// Adicione um evento de clique a cada checkbox
resourceCheckboxes.forEach(checkbox => {
  checkbox.addEventListener('click', () => {
    // Crie uma matriz de recursos com os valores de recursos selecionados
    const selectedResources = [];
    resourceCheckboxes.forEach(checkbox => {
      if (checkbox.checked) {
        selectedResources.push(checkbox.value);
      }
    });

    // Atualize a visualização do calendário para mostrar somente os eventos associados aos recursos selecionados
    const calendar = document.querySelector('#calendar');
    calendar.getApi().getEventSources().forEach(eventSource => {
      eventSource.setProp('resourceIds', selectedResources);
    });
  });
});
