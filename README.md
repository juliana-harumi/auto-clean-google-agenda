# Automação para Exclusão Automática de Eventos Passados no Google Agenda

## Descrição
O Google Agenda não possui uma funcionalidade nativa para excluir automaticamente eventos passados. Como organizo minha rotina e estudos por lá, não gosto de visualizar eventos que já aconteceram, pois isso acaba poluindo minha agenda. Para resolver esse problema, criei essa automação que remove automaticamente eventos antigos de uma agenda específica.

## Como Funciona
O script utiliza o **Google Apps Script** para buscar e excluir eventos passados de uma agenda específica. Além disso, um acionador automático é configurado para executar essa limpeza todos os dias às 06:00 da manhã.

## Configuração
1. Acesse o [Google Apps Script](https://script.google.com/).
2. Crie um novo projeto e copie o código do arquivo `deletePastEvents.gs`.
3. Substitua `'ID da agenda'` pelo ID da agenda que deseja limpar.
4. Salve o script e clique em **Executar** para testar.
5. Para automatizar a execução diária:
   - Vá até **Editor de Scripts** > **Acionadores**.
   - Clique em **Adicionar acionador**.
   - Configure para executar `deletePastEvents` diariamente às 06:00.

## Observação
- O script **deleta permanentemente** os eventos passados. Certifique-se de aplicá-lo apenas a agendas onde essa ação seja desejada.
- O ID da agenda pode ser encontrado nas configurações do Google Agenda, na seção **Integração com o calendário**.

## Contribuição
Se você tiver sugestões ou melhorias, sinta-se à vontade para abrir um pull request!

## Licença
Este projeto é de código aberto e pode ser utilizado livremente.

