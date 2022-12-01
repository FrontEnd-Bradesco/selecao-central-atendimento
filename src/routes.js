import SelecaoCorretorSegurado from './components/selecaoCorretorSegurado/selecaoCorretorSegurado.vue'
//Para cada rota nova é necessário criar uma action em struts.xml
// Ex:

// <action name="abrirCentralSinistroCorretor" class="avisoSinistroAction" method="abrirCentralSinistroCorretor">
    // <result name="central-sinistro-re-corretor">/WEB-INF/pages/indexCorretor.jsp</result>
    // <result name="error">/WEB-INF/pages/error.jsp</result>
    // <result name="usuario-nao-autorizado">/WEB-INF/pages/erro/erro-autorizacao.jsp</result>
    // <result name="usuario-nao-autenticado">/WEB-INF/pages/erro/erro-seguranca.jsp</result>
// </action>

export const routes = [
  
    {
      path: '*',
      redirect: 'acessoCentralAtendimentoIntranet.do'
    },
    {
      path: '/acessoCentralAtendimentoIntranet.do',
      name: 'sinistrosAbertos',
      component: SelecaoCorretorSegurado,
      props: { titulo: 'Selecao Corretor Segurado',}

    }
];