# Automação para Exclusão Automática de Eventos Passados no Google Agenda

## Descrição
O Google Agenda não possui uma funcionalidade nativa para excluir automaticamente eventos passados. Como organizo minha rotina e estudos por lá, não gosto de visualizar eventos que já aconteceram, pois isso acaba poluindo minha agenda. Para resolver esse problema, criei essa automação que remove automaticamente eventos antigos de uma agenda específica.

## Como Funciona
O script utiliza o **Google Apps Script** para buscar e excluir eventos passados de uma agenda específica. Além disso, um acionador automático é configurado para executar essa limpeza **a cada 1 hora**.

## Configuração

### 1. Obter o ID da sua agenda
Para obter o **ID da agenda** que será usado no script:
1. Acesse o [Google Agenda](https://calendar.google.com/).
2. No canto esquerdo, passe o mouse sobre a agenda desejada e clique nos **três pontinhos (⋮)**.
3. Selecione **"Configurações e compartilhamento"**.
4. Role para baixo até a seção **"Integrar agenda"**.
5. Copie o valor do campo **"ID da agenda"**.

### 2. Configuração do script
1. Acesse o [Google Apps Script](https://script.google.com/).
2. Crie um novo projeto e copie o código do arquivo **deletePastEvents.gs**.
3. Substitua `'ID da agenda'` pelo ID da agenda que deseja limpar.
4. Salve o script e clique em **Executar** para testar.

### 3. Criar um acionador para execução automática
1. No Google Apps Script, clique em **Editor** → **Acionadores**.
2. Adicione um novo acionador:
   - Função a ser executada: `deletePastEvents`
   - Evento: **Baseado no tempo**
   - Tipo de acionamento: **A cada hora**
3. Salve o acionador e conceda as permissões necessárias.

## Observações
- O script **deleta permanentemente** os eventos passados. Certifique-se de aplicá-lo apenas a agendas onde essa ação seja desejada.
- O código está localizado na pasta **deletePastEvents.gs** dentro deste repositório.

## Contribuição
Se você tiver sugestões ou melhorias, sinta-se à vontade para abrir um **pull request**!

## Licença
Este projeto é de código aberto e pode ser utilizado livremente.



