---
transition: slide-left
---

# APIs de Integração

<div class="gradient-subtitle text-[0.9rem]">APIs disponíveis para integração com sistemas externos</div>
<div class="gradient-divider mx-auto mt-2 mb-4"></div>

<div class="max-w-680px mx-auto">
  <table class="mfg-table">
    <thead>
      <tr class="bg-blue-500/8">
        <th class="text-blue-600 dark:text-blue-400">Módulo</th>
        <th>Entidade</th>
        <th>Operações</th>
      </tr>
    </thead>
    <tbody>
      <v-clicks>
        <tr>
          <td rowspan="3" class="font-700 text-blue-600 dark:text-blue-400 align-top"><span class="i-ph-gear-six-fill inline-block mr-2px"></span> Engenharia</td>
          <td>Lista de Materiais (BOM)</td>
          <td><span class="text-[0.85em]">Incluir, Alterar, Excluir, Consultar</span></td>
        </tr>
        <tr>
          <td>Roteiro de Produção</td>
          <td><span class="text-[0.85em]">Incluir, Alterar, Excluir, Consultar</span></td>
        </tr>
        <tr>
          <td>Recurso / Linha de Produção</td>
          <td><span class="text-[0.85em]">Incluir, Alterar, Excluir, Consultar</span></td>
        </tr>
        <tr>
          <td rowspan="2" class="font-700 text-cyan-600 dark:text-cyan-400 align-top"><span class="i-ph-factory-fill inline-block mr-2px"></span> Produção</td>
          <td>Ordem de Produção</td>
          <td><span class="text-[0.85em]">Incluir, Alterar, Excluir, Consultar<br>+ Materiais, + Operações</span></td>
        </tr>
        <tr>
          <td>Apontamento Prod. Acabado</td>
          <td><span class="text-[0.85em]">Incluir, Alterar, Excluir, Consultar</span></td>
        </tr>
      </v-clicks>
    </tbody>
  </table>
</div>

<div v-click class="max-w-400px mx-auto mt-4">
  <div class="bom-card bom-card-cyan">
    <div class="text-[0.65em] font-700 text-cyan-600 dark:text-cyan-400 mb-1">
      <span class="i-ph-brackets-curly-fill inline-block mr-4px"></span> Padrão de Retorno JSON
    </div>
    <div class="text-[0.58em] font-mono opacity-70 bg-slate-100 dark:bg-slate-800/60 rounded-6px p-2">
      { Sucesso, Mensagem, Dados, Erro }
    </div>
  </div>
</div>

<!--
ROTEIRO DO APRESENTADOR — APIs de Integração

Contexto para abrir:
"O EME4 não é uma ilha. Para empresas que já têm sistemas de automação industrial, coletores de dados, sistemas de logística ou e-commerce, oferecemos APIs REST para integração direta."

Percorrendo a tabela:
- Engenharia (BOM, Roteiro, Recursos): "Útil para laboratórios que gerenciam fórmulas em sistemas dedicados — o PLM pode enviar a BOM aprovada diretamente para o EME4 via API."
- Produção (OP e Apontamentos): "Apontamentos via coletores no chão de fábrica ou sistemas MES podem alimentar o EME4 automaticamente — sem digitação manual do operador."

Sobre o padrão JSON:
"Toda API retorna um envelope padrão: Sucesso (boolean), Mensagem (texto humanizado), Dados (payload) e Erro (código de erro se houver). Isso facilita a integração — qualquer linguagem e qualquer sistema consegue consumir."

Casos de uso para a TINSUL:
- "Se a TINSUL tiver balanças conectadas em rede, o apontamento de Baixa de MP pode ser enviado automaticamente no momento da pesagem."
- "Se houver um sistema de picking no almoxarifado, a liberação de materiais de uma OP pode disparar a separação automaticamente."
- "No futuro, uma integração com o portal de vendas pode criar OPs automaticamente a partir de pedidos de grande volume (ex: licitações) sem intervenção do PCP."

Transição:
"Para contextualizar o tamanho e a diversidade do portfólio da TINSUL que o sistema vai gerenciar, veja o próximo slide."
-->
