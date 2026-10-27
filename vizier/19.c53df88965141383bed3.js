"use strict";(self.webpackChunkvizier=self.webpackChunkvizier||[]).push([[19],{5318:(e,t,i)=>{i.r(t),i.d(t,{VizierAppComponent:()=>bt});var n=i(5185),a=i(1283),r=i(1588),l=i(4502),s=i(9452),o=i(4727),d=i(5674),c=i(9736),v=i(9574);const p=(e=(0,v.e)("/"))=>`${(0,v.e)("/mock/aanmelden")}?terug=${encodeURIComponent(e)}`,u=(0,v.e)("/extern/meer-over-grup"),m=(0,v.e)("/extern/proceduregegevens"),g=(0,v.e)("/extern/status-en-termijnopvolging"),h=(0,v.e)("/extern/codelijsten"),f=(0,v.e)("/extern/procedureconfiguratie"),b=(e,t)=>(0,v.e)(`/extern/${e}`)+(t?`?${new URLSearchParams({procedure:t})}`:""),k=e=>b("documentlocatie",e),w="vizier-inhoud@example.com",y="vizier-techniek@example.com";var $=i(8144),j=i(4680),z=i(3158);(0,n.gy)([z.a,$.I,j.Q]);const I={tekst:"Startpagina",route:"/"},q={tekst:"Terug naar overzicht",route:"/overzicht"},E=/^[\w-]+$/,T=e=>({titel:e,uitleg:`${e} is een andere toepassing. In dit prototype bestaat ze nog niet.`,terug:I}),O={proceduregegevens:T("Proceduregegevens"),"status-en-termijnopvolging":T("Status- en termijnopvolging"),codelijsten:T("Codelijsten"),procedureconfiguratie:T("Procedureconfiguratie"),"meer-over-grup":{titel:"Meer over gewestelijke ruimtelijke uitvoeringsplannen",uitleg:"Deze informatiepagina bestaat nog niet in dit prototype.",terug:I},documentlocatie:{titel:"Documentlocatie",uitleg:"In VIZIER opent deze link de documentlocatie van de procedure in SharePoint. In dit prototype zijn de procedures fictief, en bestaat die locatie niet.",terug:q},projectwebsite:{titel:"Projectwebsite",uitleg:"In VIZIER opent deze link de website van het project. In dit prototype zijn de procedures fictief, en bestaat die website niet.",terug:q}},S={titel:"Niet beschikbaar",uitleg:"Deze pagina bestaat niet in dit prototype.",terug:I};class V extends c.WF{static get properties(){return{soort:{type:String},procedure:{type:String}}}static get styles(){return[...o.b]}get pagina(){return Object.hasOwn(O,this.soort)?O[this.soort]:S}get terug(){const{terug:e}=this.pagina;return e===q&&E.test(this.procedure??"")?{tekst:"Terug naar procedure",route:`/proceduregegevens/${encodeURIComponent(this.procedure)}`}:e}updated(){document.title=`${this.pagina.titel} - VIZIER`}render(){const{titel:e,uitleg:t}=this.pagina,i=this.terug;return c.qy`
            <vl-functional-header
                title-label="VIZIER"
                link=${(0,v.e)("/")}
                back=${i.tekst}
                back-link=${(0,v.e)(i.route)}
                sub-title=${e}
                skip-to-content-id="main-content"
            ></vl-functional-header>
            <section class="vl-section">
                <div class="vl-content-block vl-stacked vl-stacked-medium">
                    <vl-title type="h1" id="main-content" no-space-bottom>${e}</vl-title>
                    <vl-paragraph>${t}</vl-paragraph>
                </div>
            </section>
        `}}customElements.define("vizier-extern",V);var x=i(6552),D=i(3372),R=i(5803),P=i(6277),A=i(8977),N=i(8412),C=i(3773),F=i(5682),M=i(6729);const Z=i.p+"5dd3c9fc183f54f6e46c.jpg";let B;const L=()=>B??(B=(async()=>{try{const e=await fetch("/api/gebruiker",{headers:{Accept:"application/json"}});return 401===e.status?{status:"niet-aangemeld"}:e.ok?{status:"aangemeld",gebruiker:await e.json()}:{status:"fout"}}catch{return{status:"fout"}}})()),K=e=>"aangemeld"===e.status&&e.gebruiker.rollen.length>0;(0,n.gy)([P.U,$.I,j.Q,x.m,D.Y,R.T,r.rC,A.L,N.Wh,C.Y,F.P,M.L]);class U extends c.WF{static get properties(){return{sessie:{state:!0}}}static get styles(){return[...o.b]}connectedCallback(){super.connectedCallback(),document.title="VIZIER",L().then((e=>this.sessie=e))}render(){const e=this.sessie,t=void 0!==e,i="aangemeld"===e?.status,n="aangemeld"===e?.status&&!K(e);return c.qy`
            <vl-content-header>
                <img slot="image" src=${Z} alt="" />
                <a slot="context-link" href=${"https://omgeving.vlaanderen.be"}>Departement Omgeving</a>
                <a slot="title-link" href=${(0,v.e)("/")}>Opvolging van planprocedures</a>
            </vl-content-header>
            <section class="vl-section">
                <div class="vl-content-block vl-stacked vl-stacked-large">
                    <div class="vl-stacked vl-stacked-medium">
                        <vl-title type="h1" id="main-content" no-space-bottom>VIZIER</vl-title>
                        <vl-paragraph introduction>
                            VIZIER is de toepassing waarmee het Departement Omgeving het verloop van gewestelijke
                            ruimtelijke uitvoeringsplannen opvolgt: procedurestap, juridische toestand en lopende
                            termijnen, per dossier. VIZIER bewaart geen documenten.<br />
                            <!-- TODO(prototype): de externe links gaan naar een uitlegpagina van VIZIER, dus in
                                 hetzelfde tabblad, met het icoon van een externe link; met echte URL's: external -->
                            <vl-link href=${u} icon="external" icon-placement="after"
                                >Meer over gewestelijke ruimtelijke uitvoeringsplannen</vl-link
                            >
                        </vl-paragraph>
                        ${t&&!i?this.renderAanmelden():c.s6}
                        ${n?this.renderGeenToegang():c.s6}
                    </div>
                    ${t&&!n?this.renderTegels():c.s6}
                    <vl-proza-message
                        domain=${"vizier"}
                        code="landingspagina-toegang"
                        base-url=${(0,v.e)("/")}
                    ></vl-proza-message>
                    <vl-title type="h2" underline>Contacteer ons</vl-title>
                    <vl-contact-card>
                        <vl-infoblock slot="info" type="contact">
                            <vl-title slot="title" type="h3" appearance="h5" no-space-bottom
                                >Departement Omgeving</vl-title
                            >
                        </vl-infoblock>
                        <vl-properties slot="properties" no-padding-bottom>
                            <vl-property>Inhoudelijke vragen</vl-property>
                            <vl-property-data>
                                <vl-link href="mailto:${w}" icon="mail" icon-placement="after"
                                    >${w}</vl-link
                                >
                            </vl-property-data>
                            <vl-property>Technische vragen</vl-property>
                            <vl-property-data>
                                <vl-link href="mailto:${y}" icon="mail" icon-placement="after"
                                    >${y}</vl-link
                                >
                            </vl-property-data>
                        </vl-properties>
                    </vl-contact-card>
                </div>
            </section>
        `}renderAanmelden(){return c.qy`
            <div class="vl-stacked vl-stacked-small">
                <vl-button icon="burgerprofiel" cta-link=${p()}>Aanmelden bij VIZIER</vl-button>
                <vl-text annotation
                    >Via de Vlaamse aanmeldoplossing. Enkel voor medewerkers van het Departement Omgeving met een
                    toegewezen rol.</vl-text
                >
            </div>
        `}renderGeenToegang(){return c.qy`
            <vl-alert type="warning" icon="warning" alert-role="no-role" title="U hebt geen toegang tot VIZIER">
                Uw account heeft geen rol in VIZIER. Neem contact op via het technische contactadres onderaan deze
                pagina om toegang te vragen.
            </vl-alert>
        `}renderTegels(){return c.qy`
            <div class="vl-grid">
                <vl-info-tile
                    size="large"
                    highlight
                    heading-level="2"
                    full-height
                    class="vl-column vl-column--6 vl-column--s-12 vl-column--align-self-stretch"
                >
                    <span slot="title">Gewestelijke planprocedures</span>
                    <span slot="subtitle">Administratieve ondersteuners / Planners</span>
                    <div slot="content" class="vl-group vl-group--wrap vl-group--separator-row">
                        <vl-link href=${(0,v.e)("/overzicht")}>Overzicht</vl-link>
                        <vl-link href=${m} icon="external" icon-placement="after"
                            >Proceduregegevens</vl-link
                        >
                        <vl-link href=${g} icon="external" icon-placement="after"
                            >Status- en termijnopvolging</vl-link
                        >
                    </div>
                </vl-info-tile>
                <vl-info-tile
                    size="large"
                    highlight
                    heading-level="2"
                    full-height
                    class="vl-column vl-column--6 vl-column--s-12 vl-column--align-self-stretch"
                >
                    <span slot="title">Beheer van deze toepassing</span>
                    <span slot="subtitle">Beheerder</span>
                    <div slot="content" class="vl-group vl-group--wrap vl-group--separator-row">
                        <vl-link href=${h} icon="external" icon-placement="after">Codelijsten</vl-link>
                        <vl-link href=${f} icon="external" icon-placement="after"
                            >Procedureconfiguratie</vl-link
                        >
                    </div>
                </vl-info-tile>
            </div>
        `}}customElements.define("vizier-landingspagina",U);var G=i(1483),_=i(175),Y=i(1083),W=i(8863),H=i(5295),X=i(7639),J=i(6816),Q=i(7988);class ee extends Error{}const te={Accept:"application/json"};class ie extends Error{}const ne=(e,...t)=>["/api/procedures",encodeURIComponent(e),...t.map(encodeURIComponent)].join("/"),ae=async(e,t)=>{const i=await fetch(ne(e),{headers:te,signal:t});if(404===i.status)throw new ie;if(!i.ok)throw new Error(`De procedure kon niet geladen worden (${i.status})`);return i.json()},re=async(e,t,i)=>{const n=await fetch(t,{method:e,headers:{...te,"Content-Type":"application/json"},body:void 0===i?void 0:JSON.stringify(i)});if(!n.ok)throw new Error(`De wijziging kon niet bewaard worden (${n.status})`)},le=(e,t,i)=>re("DELETE",ne(e,"fasen",t,"activiteiten",i,"datum")),se=(e,t,i)=>re("DELETE",ne(e,"fasen",t,"activiteiten",i)),oe=(e,t,i)=>Math.round(Date.UTC(e,t-1,i)/864e5),de=(e,t)=>{const[i,n,a]=e.split("-").map(Number);return oe(i,n,a)-oe(t.getFullYear(),t.getMonth()+1,t.getDate())},ce=e=>[e.getUTCFullYear(),e.getUTCMonth()+1,e.getUTCDate()].map((e=>String(e).padStart(2,"0"))).join("-"),ve=(e,t)=>{const[i,n,a]=e.split("-").map(Number);return ce(new Date(Date.UTC(i,n-1,a+t)))},pe=e=>{const[t,i,n]=e.split("-");return`${n}.${i}.${t}`};var ue=i(4907),me=i(1266),ge=i(5441),he=i(1009),fe=i(3481),be=i(6799),ke=i(4871),we=i(3130);const ye=async e=>{const t=await fetch(e,{headers:{Accept:"application/json"}});if(!t.ok)throw new Error(`${e} kon niet geladen worden (${t.status})`);return t.json()},$e=()=>ye("/api/codelijsten/themas"),je=()=>ye("/api/codelijsten/gemeenten");class ze extends W.Y{}ze.formControlValidators=[...W.Y.formControlValidators,{key:"customError",attribute:"bezet",message:"Er bestaat al een procedure met deze AlgplanID.",isValid:(e,t)=>!t||t!==e.getAttribute("bezet")}],customElements.define("vizier-algplan-id-veld",ze),(0,n.gy)([ue.B,D.Y,r.rC,me.E,ge.F,W.Y,he.Y,fe.Al,be.m,ke.M]);const Ie=(e,t)=>e.map((({code:e,label:i})=>({label:i,value:e,selected:e===t})));class qe extends c.WF{static get properties(){return{dossiertypes:{state:!0},themas:{state:!0},gemeenten:{state:!0},planners:{state:!0},bezig:{state:!0},fout:{state:!0},formulierNummer:{state:!0}}}static get styles(){return[...o.b]}connectedCallback(){super.connectedCallback(),this.laadKeuzelijsten()}open(e){this.terugFocus=e,this.modal?.open()}get modal(){return this.shadowRoot?.querySelector("vl-modal")}get formulier(){return this.shadowRoot?.querySelector("form")}async laadKeuzelijsten(){const[e,t,i,n,a]=await Promise.all([ye("/api/codelijsten/dossiertypes"),$e(),je(),ye("/api/planners"),L()]),r="aangemeld"===a.status?n.find((({label:e})=>e===a.gebruiker.naam))?.code:void 0;this.dossiertypes=Ie(e),this.themas=Ie(t),this.gemeenten=Ie(i),this.planners=Ie(n,r)}render(){return c.qy`
            <vl-modal
                id="nieuwe-procedure"
                title="Procedure starten"
                size="medium"
                closable
                not-cancellable
                not-auto-closable
                @vl-close=${this.gesloten}
            >
                ${(0,we.D)(this.formulierNummer,this.renderFormulier())}
                <div slot="button" class="vl-group">
                    <vl-button icon="add" ?loading=${this.bezig} @vl-click=${this.verstuur}>Start procedure</vl-button>
                    <vl-button secondary @vl-click=${this.sluit}>Annuleren</vl-button>
                </div>
            </vl-modal>
        `}renderFormulier(){return c.qy`
            <form slot="content" class="vl-form vl-stacked vl-stacked-small" @submit=${this.maakAan}>
                <!-- Enkel de optionele velden hebben een aanduiding (frame 4531:14554) -->
                <p>Alle velden zijn verplicht, tenzij anders vermeld.</p>
                <div>
                    <vl-form-label for="titel" label="Titel" block></vl-form-label>
                    <vl-input-field id="titel" name="titel" required block autocomplete="off"></vl-input-field>
                    <vl-form-message for="titel" state="valueMissing"
                        >Vul de titel van de procedure in.</vl-form-message
                    >
                </div>
                <div>
                    <vl-form-label for="dossiertype" label="Dossiertype" block></vl-form-label>
                    <vl-select
                        id="dossiertype"
                        name="dossiertype"
                        placeholder="Selecteer een dossiertype"
                        required
                        block
                        .options=${this.dossiertypes}
                    ></vl-select>
                    <vl-form-message for="dossiertype" state="valueMissing">Kies een dossiertype.</vl-form-message>
                </div>
                <div>
                    <vl-form-label for="algplanId" label="Algplanid" block></vl-form-label>
                    <vizier-algplan-id-veld
                        id="algplanId"
                        name="algplanId"
                        required
                        block
                        autocomplete="off"
                    ></vizier-algplan-id-veld>
                    <vl-form-message for="algplanId" state="valueMissing"
                        >Vul de AlgplanID in. Bijvoorbeeld: RUP_02000_212_00363_00001.</vl-form-message
                    >
                    <vl-form-message for="algplanId" state="customError"
                        >Er bestaat al een procedure met deze AlgplanID. Vul een andere AlgplanID in.</vl-form-message
                    >
                </div>
                <div>
                    <vl-form-label for="thema" label="Thema" block></vl-form-label>
                    <vl-select
                        id="thema"
                        name="thema"
                        placeholder="Selecteer een thema"
                        required
                        block
                        .options=${this.themas}
                    ></vl-select>
                    <vl-form-message for="thema" state="valueMissing">Kies een thema.</vl-form-message>
                </div>
                <div>
                    <!-- Geen placeholder "https://" zoals in het ontwerp: een placeholder is enkel een voorbeeldwaarde
                         (richtlijnen-toegankelijkheid-praktijk-richtlijnen-wip); de foutmelding geeft het voorbeeld -->
                    <vl-form-label
                        for="projectwebsite"
                        label="Projectwebsite"
                        annotation="(optioneel)"
                        block
                    ></vl-form-label>
                    <vl-input-field
                        id="projectwebsite"
                        name="projectwebsite"
                        type="url"
                        pattern=${"https?://\\S+"}
                        block
                        autocomplete="off"
                    ></vl-input-field>
                    <vl-form-message for="projectwebsite" state="patternMismatch"
                        >Vul een volledige link in. Bijvoorbeeld: https://www.project-website.be.</vl-form-message
                    >
                </div>
                <div>
                    <vl-form-label for="gemeenten" label="Betrokken gemeenten" block></vl-form-label>
                    <vl-select-rich
                        id="gemeenten"
                        name="gemeenten"
                        placeholder="Selecteer gemeenten"
                        multiple
                        search
                        required
                        .options=${this.gemeenten}
                    ></vl-select-rich>
                    <vl-form-message for="gemeenten" state="valueMissing"
                        >Kies minstens één betrokken gemeente.</vl-form-message
                    >
                </div>
                <div>
                    <vl-form-label for="opmerkingen" label="Opmerkingen" annotation="(optioneel)" block></vl-form-label>
                    <vl-textarea id="opmerkingen" name="opmerkingen" rows="4" block></vl-textarea>
                </div>
                <div class="vl-grid">
                    <div class="vl-column vl-column--7 vl-column--s-12">
                        <vl-form-label for="planner" label="Verantwoordelijke planner" block></vl-form-label>
                        <vl-select
                            id="planner"
                            name="verantwoordelijkePlanner"
                            required
                            block
                            .options=${this.planners}
                        ></vl-select>
                        <vl-form-message for="planner" state="valueMissing"
                            >Kies de verantwoordelijke planner.</vl-form-message
                        >
                    </div>
                    <div class="vl-column vl-column--5 vl-column--s-12">
                        <vl-form-label for="van" label="Van" block></vl-form-label>
                        <vl-datepicker id="van" name="van" required block value=${(()=>{const e=new Date;return[e.getFullYear(),e.getMonth()+1,e.getDate()].map((e=>String(e).padStart(2,"0"))).join("-")})()}></vl-datepicker>
                        <vl-form-message for="van" state="valueMissing"
                            >Kies de datum vanaf wanneer de planner verantwoordelijk is.</vl-form-message
                        >
                    </div>
                </div>
                ${this.fout?c.qy`
                          <vl-alert type="error" icon="warning" title="De procedure kon niet aangemaakt worden">
                              Probeer het later opnieuw.
                          </vl-alert>
                      `:c.s6}
            </form>
        `}verstuur(){this.formulier?.requestSubmit()}async maakAan(e){e.preventDefault();const t=e.target,i=(0,X.Sl)(t),n=e=>"string"==typeof i[e]?i[e]:"",a=i.gemeenten,r={dossiertype:n("dossiertype"),algplanId:n("algplanId"),titel:n("titel"),thema:n("thema"),projectwebsite:n("projectwebsite").trim()||null,gemeenten:Array.isArray(a)?a:a?[a]:[],opmerkingen:n("opmerkingen"),verantwoordelijkePlanner:n("verantwoordelijkePlanner"),van:n("van")};this.bezig=!0,this.fout=!1;try{const e=await(async e=>{const t=await fetch("/api/procedures",{method:"POST",headers:{...te,"Content-Type":"application/json"},body:JSON.stringify(e)});if(409===t.status)throw new ee;if(!t.ok)throw new Error(`De procedure kon niet aangemaakt worden (${t.status})`);return(await t.json()).algplanId})(r);this.modal?.close(),this.dispatchEvent(new CustomEvent("procedure-aangemaakt",{detail:{algplanId:e},bubbles:!0}))}catch(e){e instanceof ee?(t.querySelector("#algplanId")?.setAttribute("bezet",r.algplanId),t.requestSubmit()):this.fout=!0}finally{this.bezig=!1}}sluit(){this.modal?.close()}gesloten(){this.fout=!1,this.formulierNummer++,this.terugFocus?.shadowRoot?.querySelector("button")?.focus()}constructor(){super(),this.dossiertypes=[],this.themas=[],this.gemeenten=[],this.planners=[],this.bezig=!1,this.fout=!1,this.formulierNummer=0}}customElements.define("vizier-nieuwe-procedure",qe),(0,n.gy)([z.a,$.I,D.Y,x.m,R.T,r.rC,G.n,_.Bn,_.$2,Y.$,W.Y,H.v]);const Ee={sorteer:"algplanId",richting:"asc"},Te=`\n    @media screen and (min-width: ${J.gT+1}px) {\n        table {\n            table-layout: fixed;\n        }\n        td {\n            overflow-wrap: anywhere;\n        }\n        ${[23.2,15.9,11.6,13,10.2,15.2,10.9].map(((e,t)=>`thead th:nth-child(${t+1}) { width: ${e}%; }`)).join("\n")}\n    }\n`,Oe=(e,t)=>{(0,c.XX)(c.qy`
            <div>
                <vl-link small href=${(0,v.e)(`/proceduregegevens/${encodeURIComponent(t.algplanId)}`)}
                    >${t.titel}</vl-link
                >
            </div>
            ${t.documentlocatie?c.qy`
                      <div>
                          <!-- TODO(prototype): de naam van de link voor een schermlezer, na review -->
                          <!-- TODO(prototype): naar een uitlegpagina van VIZIER, dus in hetzelfde tabblad, met het
                               icoon van een externe link; met de echte backend: external -->
                          <vl-link
                              small
                              icon="external"
                              icon-placement="after"
                              href=${k()}
                              label="Open documentlocatie van ${t.titel}"
                              >Open documentlocatie</vl-link
                          >
                      </div>
                  `:c.s6}
        `,e)},Se=(e,t)=>{(0,c.XX)(c.qy`
            <div><vl-text small>${t.algplanId}</vl-text></div>
            <div><vl-text annotation>${t.dossiertype}</vl-text></div>
        `,e)},Ve=(e,t)=>{var i;(0,c.XX)(c.qy`<vl-pill type=${i=t.status,("In uitvoering"===i?"success":void 0)??c.s6}>${t.status}</vl-pill>`,e)},xe=(e,t)=>{const i=t.deadline?((e,t=new Date)=>{const i=de(e,t);return i<0?{type:"error",tekst:"Verstreken"}:i<=30?{type:"warning",tekst:0===i?"Vandaag":1===i?"Nog 1 dag":`Nog ${i} dagen`}:void 0})(t.deadline):void 0;(0,c.XX)(c.qy`
            ${t.deadline?c.qy`<div>${pe(t.deadline)}</div>`:c.qy`<div>
                      <span aria-hidden="true">-</span><span class="vl-visually-hidden">Geen deadline</span>
                  </div>`}
            ${i?c.qy`<div><vl-pill type=${i.type}>${i.tekst}</vl-pill></div>`:c.s6}
        `,e)};class De extends c.WF{static get properties(){return{zoekopdracht:{state:!0}}}get resultaat(){return this.zoeken.value}static get styles(){return[...o.b]}connectedCallback(){super.connectedCallback(),document.title="Overzicht - VIZIER"}render(){return c.qy`
            <vl-functional-header
                title-label="VIZIER"
                link=${(0,v.e)("/")}
                back="Startpagina"
                back-link=${(0,v.e)("/")}
                sub-title="Overzicht"
                sticky
                full-width
                skip-to-content-id="main-content"
            >
                <div class="vl-group vl-margin--small vl-margin--no-bottom" slot="top-right">
                    <vl-button
                        id="nieuwe-procedure-knop"
                        icon="add"
                        aria-haspopup="dialog"
                        @vl-click=${this.openNieuweProcedure}
                        >Start procedure</vl-button
                    >
                </div>
            </vl-functional-header>
            <section class="vl-section">
                <div class="vl-content-block vl-content-block--full-width vl-stacked vl-stacked-medium">
                    <vl-title type="h1" id="main-content" no-space-bottom>Overzicht</vl-title>
                    <form
                        role="search"
                        aria-label="Procedures zoeken"
                        class="vl-stacked vl-stacked-small"
                        @submit=${this.zoek}
                    >
                        <!-- breed genoeg voor de placeholder: block vult de kolom -->
                        <div class="vl-grid">
                            <div class="vl-column vl-column--3 vl-column--m-6 vl-column--s-12">
                                <div class="vl-group vl-group--input-group">
                                    <vl-input-field
                                        input-group
                                        block
                                        type="search"
                                        name="zoekterm"
                                        label="Zoek op titel of AlgplanID"
                                        placeholder="Zoek op titel of AlgplanID"
                                    ></vl-input-field>
                                    <vl-button
                                        input-group
                                        icon="search"
                                        type="submit"
                                        label="Zoeken"
                                        tertiary
                                        ?loading=${this.zoeken.status===Q.e1.PENDING}
                                    ></vl-button>
                                </div>
                            </div>
                        </div>
                        <div class="vl-group">
                            <vl-checkbox name="enkelMijn" value="true" @vl-change=${this.wijzigVinkje}
                                >Enkel mijn procedures</vl-checkbox
                            >
                            <vl-checkbox name="gearchiveerd" value="true" @vl-change=${this.wijzigVinkje}
                                >Toon gearchiveerde procedures</vl-checkbox
                            >
                        </div>
                    </form>
                    ${this.zoeken.status===Q.e1.ERROR?this.renderFout():c.qy`${this.renderAantal()} ${this.renderTabel()}`}
                </div>
            </section>
            <vizier-nieuwe-procedure @procedure-aangemaakt=${this.toonNieuweProcedure}></vizier-nieuwe-procedure>
        `}renderAantal(){if(!this.resultaat)return c.s6;const{totaal:e}=this.resultaat,t=0===e?"geen resultaten":1===e?"1 resultaat":`${e.toLocaleString("nl-BE")} resultaten`;return c.qy`<vl-text aria-hidden="true">We vonden <strong>${t}</strong></vl-text>`}renderFout(){return c.qy`
            <vl-alert type="error" icon="warning" title="De procedures konden niet geladen worden">
                Probeer het later opnieuw.
            </vl-alert>
        `}renderTabel(){const{sorteer:e,richting:t,pagina:i}=this.zoekopdracht;return c.qy`
            <vl-rich-data-table
                label="Procedures"
                custom-css=${Te}
                .data=${{data:this.resultaat?.procedures??[],paging:{currentPage:i,totalItems:this.resultaat?.totaal??0},sorting:e?[{name:e,direction:t,priority:1}]:[]}}
                @change=${this.wijzigTabel}
            >
                <vl-rich-data-field
                    name="titel"
                    label="Procedure"
                    sortable
                    .renderer=${Oe}
                ></vl-rich-data-field>
                <vl-rich-data-field
                    name="algplanId"
                    label="AlgplanID"
                    sortable
                    sorting-direction="asc"
                    .renderer=${Se}
                ></vl-rich-data-field>
                <vl-rich-data-field name="thema" label="Thema" selector="thema" sortable></vl-rich-data-field>
                <vl-rich-data-field
                    name="procedurestap"
                    label="Procedurestap"
                    selector="procedurestap"
                    sortable
                ></vl-rich-data-field>
                <vl-rich-data-field name="status" label="Status" sortable .renderer=${Ve}></vl-rich-data-field>
                <vl-rich-data-field
                    name="verantwoordelijkePlanner"
                    label="Verantwoordelijk planner"
                    selector="verantwoordelijkePlanner"
                    sortable
                ></vl-rich-data-field>
                <vl-rich-data-field
                    name="deadline"
                    label="Deadline"
                    sortable
                    .renderer=${xe}
                ></vl-rich-data-field>
                <vl-pager slot="pager" items-per-page=${20}></vl-pager>
            </vl-rich-data-table>
        `}leesZoekformulier(){const e=this.shadowRoot?.querySelector('form[role="search"]');if(!e)return;const t=(0,X.Sl)(e);return{zoekterm:t.zoekterm??"",enkelMijn:"true"===t.enkelMijn,gearchiveerd:"true"===t.gearchiveerd}}zoek(e){e.preventDefault();const t=this.leesZoekformulier();t&&(this.zoekopdracht={...this.zoekopdracht,...t,pagina:1})}wijzigVinkje(){const e=this.leesZoekformulier();!e||e.enkelMijn===this.zoekopdracht.enkelMijn&&e.gearchiveerd===this.zoekopdracht.gearchiveerd||(this.zoekopdracht={...this.zoekopdracht,...e,pagina:1})}wijzigTabel(e){if(!e.detail)return;const t=e.detail.sorting?.[0],i=t?.name??Ee.sorteer,n=t?.direction??Ee.richting,a=i!==this.zoekopdracht.sorteer||n!==this.zoekopdracht.richting,r=a?1:e.detail.paging?.currentPage??this.zoekopdracht.pagina;(a||r!==this.zoekopdracht.pagina)&&(this.zoekopdracht={...this.zoekopdracht,sorteer:i,richting:n,pagina:r})}openNieuweProcedure(e){this.shadowRoot?.querySelector("vizier-nieuwe-procedure")?.open(e.currentTarget)}toonNieuweProcedure(e){var t;t=`/proceduregegevens/${encodeURIComponent(e.detail.algplanId)}`,window.history.pushState({},"",(0,v.e)(t)),window.dispatchEvent(new PopStateEvent("popstate"))}constructor(){super(),this.zoeken=new Q.YZ(this,{task:([e],{signal:t})=>(async(e,t)=>{const i=new URLSearchParams({zoekterm:e.zoekterm,pagina:String(e.pagina),perPagina:String(e.perPagina)});e.enkelMijn&&i.set("enkelMijn","true"),e.gearchiveerd&&i.set("gearchiveerd","true"),e.sorteer&&(i.set("sorteer",e.sorteer),i.set("richting",e.richting??"asc"));const n=await fetch(`/api/procedures?${i}`,{headers:te,signal:t});if(!n.ok)throw new Error(`De procedures konden niet geladen worden (${n.status})`);return n.json()})(e,t),args:()=>[this.zoekopdracht]}),this.zoekopdracht={zoekterm:"",enkelMijn:!1,gearchiveerd:!1,...Ee,pagina:1,perPagina:20}}}customElements.define("vizier-overzicht",De);var Re=i(6009),Pe=i(9724),Ae=i(6216),Ne=i(6446),Ce=i(9063),Fe=i(4747),Me=i(4899);const Ze=e=>[...e.filter((e=>e.datum)).sort(((e,t)=>t.datum.localeCompare(e.datum))),...e.filter((e=>!e.datum))],Be=e=>!!e.datum||"0..*"!==e.kardinaliteit,Le=e=>{if(!e.datum)return;const t=e.periode&&e.einddatum?` tot ${pe(e.einddatum)}`:"";return`${pe(e.datum)}${t}`},Ke=(e,t)=>"0..*"===e||"1..*"===e&&t>1,Ue=e=>e.find((e=>"ACTIEF"===e.toestand)),Ge=e=>[...e].reverse(),_e=e=>["ACTIEF","AFGEROND","HERHAALD"].includes(e.toestand)&&"VOORBEREIDING"!==e.type.code,Ye=(e,t)=>{const i=e.findIndex((e=>e.id===t));return Ge(e.filter(((e,t)=>(i<0||t<=i)&&"NOG_TE_STARTEN"!==e.toestand&&"VOORBEREIDING"!==e.type.code)))},We={NOG_TE_STARTEN:"Nog te starten",NOG_IN_TE_VULLEN:"Nog in te vullen",ACTIEF:"Actief",AFGEROND:"Afgerond",HERHAALD:"Herhaald"};var He=i(2743);(0,n.gy)([He.V,ue.B,$.I,D.Y,r.rC,me.E,ge.F]);const Xe="procedure-gewijzigd",Je=(e,t)=>"string"==typeof e[t]?e[t]:"",Qe=(e,t)=>Je(e,t).trim()||null,et=(e,t)=>{const i=e[t];return Array.isArray(i)?i:i?[i]:[]},tt=async e=>{await(e?.updateComplete),e?.shadowRoot?.querySelector('input, select, textarea, button, [tabindex="0"]')?.focus()},it=c.qy`<p>Alle velden zijn verplicht, tenzij anders vermeld.</p>`,nt=e=>c.qy`
    <vl-alert type="error" icon="warning" title=${e}>Probeer het later opnieuw.</vl-alert>
`;class at extends c.WF{static get properties(){return{gegevens:{attribute:!1},bezig:{state:!0},fout:{state:!0},formulierNummer:{state:!0}}}static get styles(){return[...o.b]}voorbereiden(){}get zijpaneel(){return this.shadowRoot?.querySelector("vl-side-sheet")??null}get formulier(){return this.shadowRoot?.querySelector("form")}get isOpen(){return this.zijpaneel?.hasAttribute("open")??!1}async open(e){this.terugFocus=e,this.fout=!1,this.voorbereiden(),this.formulierNummer++,await this.updateComplete,this.zijpaneel?.open(),requestAnimationFrame((()=>tt(this.formulier?.querySelector("vl-input-field, vl-select, vl-select-rich, vl-datepicker, vl-textarea, [data-veld]"))))}close(){this.zijpaneel?.close()}firstUpdated(){this.zijpaneel?.onClose((()=>this.gesloten()))}render(){return c.qy`
            <!-- top: onder de globale header en de sticky functionele header (vl-side-sheet). TODO(prototype): de hoogte
                 van de functionele header -->
            <vl-side-sheet hide-toggle-button top="150px" custom-css=":host { --vl-side-sheet-width: 48rem; }">
                ${(0,we.D)(this.formulierNummer,c.qy`
                        <form class="vl-form vl-stacked vl-stacked-small" @submit=${this.verstuur}>
                            <vl-title type="h2" no-space-bottom>${this.titel}</vl-title>
                            ${this.renderVelden()}
                            ${this.fout?nt("De wijziging kon niet bewaard worden"):c.s6}
                            <div class="vl-group">
                                <vl-button type="submit" ?loading=${this.bezig}>Opslaan</vl-button>
                                <vl-button secondary @vl-click=${this.close}>Annuleren</vl-button>
                            </div>
                        </form>
                    `)}
            </vl-side-sheet>
        `}async verstuur(e){e.preventDefault();const t=e.target;this.bezig=!0,this.fout=!1;try{await this.bewaar((0,X.Sl)(t),t),this.close(),this.dispatchEvent(new CustomEvent(Xe,{bubbles:!0,composed:!0}))}catch{this.fout=!0}finally{this.bezig=!1}}gesloten(){this.fout=!1,tt(this.terugFocus)}constructor(){super(),this.bezig=!1,this.fout=!1,this.formulierNummer=0}}class rt extends c.WF{static get properties(){return{gegevens:{attribute:!1},bezig:{state:!0},fout:{state:!0},formulierNummer:{state:!0}}}static get styles(){return[...o.b]}get gevaarlijk(){return!1}voorbereiden(){}get modal(){return this.shadowRoot?.querySelector("vl-modal")}async open(e){this.terugFocus=e,this.fout=!1,this.voorbereiden(),this.formulierNummer++,await this.updateComplete,this.modal?.open()}close(){this.modal?.close()}render(){return c.qy`
            <vl-modal
                title=${this.titel}
                size="medium"
                closable
                not-cancellable
                not-auto-closable
                @vl-close=${this.gesloten}
            >
                ${(0,we.D)(this.formulierNummer,c.qy`
                        <form slot="content" class="vl-form vl-stacked vl-stacked-small" @submit=${this.verstuur}>
                            ${this.renderInhoud()}
                            ${this.fout?nt("De wijziging kon niet bewaard worden"):c.s6}
                        </form>
                    `)}
                <div slot="button" class="vl-group">
                    <vl-button ?error=${this.gevaarlijk} ?loading=${this.bezig} @vl-click=${this.bevestig}
                        >${this.knoptekst}</vl-button
                    >
                    <vl-button secondary @vl-click=${this.close}>Annuleren</vl-button>
                </div>
            </vl-modal>
        `}bevestig(){this.shadowRoot?.querySelector("form")?.requestSubmit()}async verstuur(e){e.preventDefault(),this.bezig=!0,this.fout=!1;try{await this.bewaar((0,X.Sl)(e.target));const t=this.focusNaWijziging;t&&(this.terugFocus=void 0),this.close(),this.dispatchEvent(new CustomEvent(Xe,{bubbles:!0,composed:!0,detail:{focus:t}}))}catch{this.fout=!0}finally{this.bezig=!1}}get focusNaWijziging(){}gesloten(){this.fout=!1,tt(this.terugFocus)}constructor(){super(),this.bezig=!1,this.fout=!1,this.formulierNummer=0}}(0,n.gy)([W.Y,he.Y,fe.Al,be.m,ke.M]);const lt=(e,t=[])=>e.map((({code:e,label:i})=>({label:i,value:e,selected:t.includes(e)})));class st extends((0,X.hG)(ke.M)){}st.formControlValidators=[...ke.M.formControlValidators,{key:"customError",message:"Kies een datum Tot na de datum Van.",dependencySelectors:["#van"],isValid:(e,t)=>{const i=e.form?.querySelector("#van")?.value;return!t||!i||t>i}}],customElements.define("vizier-tot-datum",st);customElements.define("vizier-titel-aanpassen",class extends at{get titel(){return"Titel aanpassen"}renderVelden(){return c.qy`
            <div>
                <vl-form-label for="titel" label="Titel" block></vl-form-label>
                <!-- TODO(prototype): een lange titel past niet op één regel (open vraag 15) -->
                <vl-input-field
                    id="titel"
                    name="titel"
                    required
                    block
                    autocomplete="off"
                    value=${this.gegevens?.titel??""}
                ></vl-input-field>
                <vl-form-message for="titel" state="valueMissing">Vul de titel van de procedure in.</vl-form-message>
            </div>
        `}async bewaar(e){var t,i;await(t=this.gegevens.algplanId,i=Je(e,"titel").trim(),re("PUT",ne(t,"titel"),{titel:i}))}});customElements.define("vizier-status-wijzigen",class extends at{connectedCallback(){super.connectedCallback(),ye("/api/codelijsten/statussen").then((e=>this.statussen=e)),ye("/api/codelijsten/juridischestatussen").then((e=>this.juridischeStatussen=e))}get titel(){return"Status wijzigen"}voorbereiden(){const e=this.gegevens?.juridischeStatus?.code;this.opties=lt(this.statussen,this.gegevens?.status?[this.gegevens.status.code]:[]),this.juridischeOpties=[{label:"Geen juridische status",value:"",selected:!e},...lt(this.juridischeStatussen,e?[e]:[])]}renderVelden(){return c.qy`
            <div>
                <vl-form-label for="status" label="Operationele status" block></vl-form-label>
                <vl-select
                    id="status"
                    name="status"
                    placeholder="Selecteer een status"
                    required
                    block
                    .options=${this.opties}
                ></vl-select>
                <vl-form-message for="status" state="valueMissing">Kies een operationele status.</vl-form-message>
            </div>
            <div>
                <vl-form-label
                    for="juridische-status"
                    label="Juridische status"
                    annotation="(optioneel)"
                    block
                ></vl-form-label>
                <vl-select
                    id="juridische-status"
                    name="juridischeStatus"
                    block
                    not-deletable
                    .options=${this.juridischeOpties}
                ></vl-select>
            </div>
        `}async bewaar(e){var t,i,n;await(t=this.gegevens.algplanId,i=Je(e,"status"),n=Qe(e,"juridischeStatus"),re("PUT",ne(t,"status"),{status:i,juridischeStatus:n}))}constructor(...e){super(...e),this.statussen=[],this.juridischeStatussen=[],this.opties=[],this.juridischeOpties=[]}});customElements.define("vizier-basisgegevens-wijzigen",class extends at{connectedCallback(){super.connectedCallback(),Promise.all([$e(),je()]).then((([e,t])=>Object.assign(this,{themas:e,gemeenten:t})))}get titel(){return"Basisgegevens wijzigen"}voorbereiden(){this.themaOpties=lt(this.themas,this.gegevens?.thema?[this.gegevens.thema.code]:[]),this.gemeenteOpties=lt(this.gemeenten,(this.gegevens?.gemeenten??[]).map((e=>e.code)))}renderVelden(){const e=this.gegevens;return c.qy`
            ${it}
            <div>
                <vl-form-label for="thema" label="Thema" block></vl-form-label>
                <vl-select
                    id="thema"
                    name="thema"
                    placeholder="Selecteer een thema"
                    required
                    block
                    .options=${this.themaOpties}
                ></vl-select>
                <vl-form-message for="thema" state="valueMissing">Kies een thema.</vl-form-message>
            </div>
            <div>
                <vl-form-label
                    for="projectwebsite"
                    label="Projectwebsite"
                    annotation="(optioneel)"
                    block
                ></vl-form-label>
                <vl-input-field
                    id="projectwebsite"
                    name="projectwebsite"
                    type="url"
                    pattern=${"https?://\\S+"}
                    block
                    autocomplete="off"
                    value=${e?.projectwebsite??""}
                ></vl-input-field>
                <vl-form-message for="projectwebsite" state="patternMismatch"
                    >Vul een volledige link in. Bijvoorbeeld: https://www.project-website.be.</vl-form-message
                >
            </div>
            <div>
                <vl-form-label for="gemeenten" label="Betrokken gemeenten" block></vl-form-label>
                <vl-select-rich
                    id="gemeenten"
                    name="gemeenten"
                    placeholder="Selecteer gemeenten"
                    multiple
                    search
                    required
                    .options=${this.gemeenteOpties}
                ></vl-select-rich>
                <vl-form-message for="gemeenten" state="valueMissing"
                    >Kies minstens één betrokken gemeente.</vl-form-message
                >
            </div>
            <div>
                <vl-form-label for="opmerkingen" label="Opmerkingen" annotation="(optioneel)" block></vl-form-label>
                <vl-textarea
                    id="opmerkingen"
                    name="opmerkingen"
                    rows="6"
                    block
                    value=${e?.opmerkingen??""}
                ></vl-textarea>
            </div>
        `}async bewaar(e){var t,i;await(t=this.gegevens.algplanId,i={thema:Je(e,"thema"),projectwebsite:Qe(e,"projectwebsite"),gemeenten:et(e,"gemeenten"),opmerkingen:Qe(e,"opmerkingen")},re("PUT",ne(t,"basisgegevens"),i))}constructor(...e){super(...e),this.themas=[],this.gemeenten=[],this.themaOpties=[],this.gemeenteOpties=[]}});customElements.define("vizier-persoon",class extends at{connectedCallback(){super.connectedCallback(),Promise.all([ye("/api/codelijsten/rollen"),ye("/api/medewerkers")]).then((([e,t])=>Object.assign(this,{rollen:e,medewerkers:t})))}openVoor(e,t){return this.teamlid=t,this.open(e)}get titel(){return this.teamlid?"Persoon wijzigen":"Persoon toevoegen"}voorbereiden(){this.rolOpties=lt(this.rollen,this.teamlid?[this.teamlid.rol.code]:[]),this.persoonOpties=lt(this.medewerkers,this.teamlid?[this.teamlid.persoon.code]:[])}renderVelden(){const e=this.teamlid;return c.qy`
            ${it}
            <div>
                <vl-form-label for="rol" label="Rol" block></vl-form-label>
                <vl-select
                    id="rol"
                    name="rol"
                    placeholder="Selecteer een rol"
                    required
                    block
                    .options=${this.rolOpties}
                ></vl-select>
                <vl-form-message for="rol" state="valueMissing">Kies een rol.</vl-form-message>
            </div>
            <div>
                <vl-form-label for="naam" label="Naam" block></vl-form-label>
                <vl-select-rich
                    id="naam"
                    name="persoon"
                    placeholder="Selecteer een persoon"
                    search
                    required
                    .options=${this.persoonOpties}
                    @vl-change=${this.vulEmailIn}
                ></vl-select-rich>
                <vl-form-message for="naam" state="valueMissing">Kies een persoon.</vl-form-message>
            </div>
            <div>
                <vl-form-label for="email" label="E-mailadres" block></vl-form-label>
                <vl-input-field
                    id="email"
                    name="email"
                    type="email"
                    pattern=${"[^@\\s]+@[^@\\s]+\\.[^@\\s]+"}
                    required
                    block
                    autocomplete="off"
                    value=${e?.email??""}
                ></vl-input-field>
                <vl-form-message for="email" state="valueMissing"
                    >Vul het e-mailadres in. Bijvoorbeeld: sofie.peeters@vlaanderen.be.</vl-form-message
                >
                <vl-form-message for="email" state="patternMismatch"
                    >Vul een geldig e-mailadres in. Bijvoorbeeld: sofie.peeters@vlaanderen.be.</vl-form-message
                >
            </div>
            <div class="vl-grid">
                <div class="vl-column vl-column--6 vl-column--s-12">
                    <vl-form-label for="van" label="Van" block></vl-form-label>
                    <vl-datepicker id="van" name="van" required block value=${e?.van??""}></vl-datepicker>
                    <vl-form-message for="van" state="valueMissing"
                        >Kies de datum vanaf wanneer de persoon in het team zit.</vl-form-message
                    >
                </div>
                <div class="vl-column vl-column--6 vl-column--s-12">
                    <vl-form-label for="tot" label="Tot" annotation="(optioneel)" block></vl-form-label>
                    <vizier-tot-datum id="tot" name="tot" block value=${e?.tot??""}></vizier-tot-datum>
                    <vl-form-message for="tot" state="customError">Kies een datum Tot na de datum Van.</vl-form-message>
                </div>
            </div>
        `}vulEmailIn(e){const t=this.medewerkers.find((({code:t})=>t===e.detail?.value)),i=this.shadowRoot?.querySelector("#email");t&&i&&(i.value=t.email)}async bewaar(e){const t={rol:Je(e,"rol"),persoon:Je(e,"persoon"),email:Je(e,"email").trim(),van:Je(e,"van"),tot:Qe(e,"tot")},i=this.gegevens.algplanId;await(this.teamlid?((e,t,i)=>re("PUT",ne(e,"team",t),i))(i,this.teamlid.id,t):((e,t)=>re("POST",ne(e,"team"),t))(i,t))}constructor(...e){super(...e),this.rollen=[],this.medewerkers=[],this.rolOpties=[],this.persoonOpties=[]}}),(0,n.gy)([he.Y]);const ot=(e,t)=>e.map((({id:e,naam:i})=>({label:i,value:e,selected:e===t})));customElements.define("vizier-procedurestap-wijzigen",class extends rt{static get properties(){return{...super.properties,substapOpties:{state:!0}}}get titel(){return"Procedurestap wijzigen"}get knoptekst(){return"Procedurestap wijzigen"}voorbereiden(){const e=this.gegevens?.fasen??[],t=Ue(e);this.fase=t?.id,this.faseOpties=ot(Ge(e),t?.id),this.substapOpties=lt(t?.substappen??[],t?.substap?[t.substap.code]:[])}kiesFase(e){const t=e.detail?.value;if(!t||t===this.fase)return;this.fase=t;const i=this.gegevens?.fasen.find((e=>e.id===t))?.substappen??[];this.substapOpties=lt(i,i[0]?[i[0].code]:[])}renderInhoud(){return c.qy`
            <p>Kies welke procedurestap en proceduresubstap actief worden.</p>
            <div>
                <vl-form-label for="procedurestap" label="Procedurestap" block></vl-form-label>
                <vl-select
                    id="procedurestap"
                    name="fase"
                    required
                    block
                    .options=${this.faseOpties}
                    @vl-change=${this.kiesFase}
                ></vl-select>
                <vl-form-message for="procedurestap" state="valueMissing"
                    >Kies de procedurestap die actief wordt.</vl-form-message
                >
            </div>
            ${this.substapOpties.length?c.qy`
                      <div>
                          <vl-form-label for="proceduresubstap" label="Proceduresubstap" block></vl-form-label>
                          <vl-select
                              id="proceduresubstap"
                              name="substap"
                              required
                              block
                              .options=${this.substapOpties}
                          ></vl-select>
                          <vl-form-message for="proceduresubstap" state="valueMissing"
                              >Kies de proceduresubstap die actief wordt.</vl-form-message
                          >
                      </div>
                  `:c.s6}
        `}async bewaar(e){var t,i,n;await(t=this.gegevens.algplanId,i=Je(e,"fase"),n=Qe(e,"substap"),re("POST",ne(t,"procedurestap"),{fase:i,substap:n}))}constructor(){super(),this.faseOpties=[],this.substapOpties=[]}});customElements.define("vizier-procedurestap-herhalen",class extends rt{static get properties(){return{...super.properties,voorafgaandeOpties:{state:!0}}}get titel(){return"Procedurestap herhalen"}get knoptekst(){return"Herhalen"}voorbereiden(){const e=this.gegevens?.fasen??[];this.fase=void 0,this.na=Ue(e)?.id,this.opties=ot(Ge(e.filter(_e))),this.voorafgaandeOpties=ot(Ye(e),this.na)}kiesFase(e){const t=e.detail?.value;if(!t||t===this.fase)return;this.fase=t;const i=Ye(this.gegevens?.fasen??[],t),n=Ue(this.gegevens?.fasen??[])?.id,a=i.some((e=>e.id===this.na));this.na=a?this.na:(i.find((e=>e.id===n))??i[0])?.id,this.voorafgaandeOpties=ot(i,this.na)}kiesVoorafgaande(e){this.na=e.detail?.value||this.na}renderInhoud(){return c.qy`
            <p>
                Kies welke procedurestap opnieuw doorlopen wordt, en na welke procedurestap de herhaling in de tijdlijn
                komt.
            </p>
            <div>
                <vl-form-label for="te-herhalen-procedurestap" label="Procedurestap" block></vl-form-label>
                <vl-select
                    id="te-herhalen-procedurestap"
                    name="fase"
                    placeholder="Selecteer een procedurestap"
                    required
                    block
                    .options=${this.opties}
                    @vl-change=${this.kiesFase}
                ></vl-select>
                <vl-form-message for="te-herhalen-procedurestap" state="valueMissing"
                    >Kies de procedurestap die u herhaalt.</vl-form-message
                >
            </div>
            <div>
                <vl-form-label
                    for="voorafgaande-procedurestap"
                    label="Voorafgaande procedurestap"
                    block
                ></vl-form-label>
                <vl-select
                    id="voorafgaande-procedurestap"
                    name="na"
                    required
                    block
                    .options=${this.voorafgaandeOpties}
                    @vl-change=${this.kiesVoorafgaande}
                ></vl-select>
                <vl-form-message for="voorafgaande-procedurestap" state="valueMissing"
                    >Kies de procedurestap waarna de herhaling komt.</vl-form-message
                >
            </div>
        `}async bewaar(e){var t,i,n;await(t=this.gegevens.algplanId,i=Je(e,"fase"),n=Je(e,"na"),re("POST",ne(t,"herhalingen"),{fase:i,na:n}))}constructor(){super(),this.opties=[],this.voorafgaandeOpties=[]}});customElements.define("vizier-herhaling-verwijderen",class extends rt{openVoor(e,t){return this.fase=t,this.open(e)}get titel(){return`${this.fase?.naam??"Herhaling"} verwijderen`}get knoptekst(){return"Verwijderen"}get gevaarlijk(){return!0}get focusNaWijziging(){return"#tijdlijn"}renderInhoud(){return c.qy`<p>De herhaalde procedurestap en haar activiteiten verdwijnen uit de tijdlijn.</p>`}async bewaar(){var e,t;await(e=this.gegevens.algplanId,t=this.fase.id,re("DELETE",ne(e,"fasen",t)))}});customElements.define("vizier-activiteit-wissen",class extends rt{openVoor(e,t,i){return this.fase=t,this.activiteit=i,this.open(e)}get soort(){return this.activiteit?.datum?"0..*"===this.activiteit.kardinaliteit?"optioneel":"wissen":"vermelding"}get titel(){return"wissen"===this.soort?"Datum wissen?":`${this.activiteit?.naam} verwijderen?`}get knoptekst(){return"wissen"===this.soort?"Datum wissen":"Verwijderen"}get gevaarlijk(){return"wissen"!==this.soort}get focusNaWijziging(){return`#${CSS.escape(`fase-${this.fase?.id}`)} vl-button[label="${this.fase?.naam} bewerken"]`}renderInhoud(){const e=this.activiteit?.naam,t=this.activiteit?Le(this.activiteit):void 0;switch(this.soort){case"wissen":return c.qy`<p>
                    De ${this.activiteit?.periode?"periode":"datum"} ${t} van ${e} wordt gewist. De
                    activiteit blijft op de tijdlijn staan, zonder datum.
                </p>`;case"optioneel":return c.qy`<p>
                    Zonder datum staat ${e} niet op de tijdlijn. Wis je de datum ${t}, dan verdwijnt de
                    activiteit.
                </p>`;case"vermelding":{const t=(this.fase?.activiteiten??[]).filter((e=>e.type.code===this.activiteit?.type.code)).length-1;return c.qy`<p>
                    Deze vermelding heeft geen datum en verdwijnt van de tijdlijn.
                    ${t>1?`De andere vermeldingen van ${e} blijven staan.`:`De andere vermelding van ${e} blijft staan.`}
                </p>`}}}async bewaar(){const e="vermelding"===this.soort?se:le;await e(this.gegevens.algplanId,this.fase.id,this.activiteit.id)}});var dt=i(3462);(0,n.gy)([$.I,R.T,D.Y,dt.m,ke.M,W.Y,he.Y]);const ct={key:"customError",message:"Kies een einddatum na de startdatum.",dependencySelectors:["[data-startdatum]"],isValid:(e,t)=>{const i=e.getAttribute("startdatum"),n=i?e.form?.querySelector(`#${CSS.escape(i)}`)?.value:void 0;return!t||!n||t>=n}};class vt extends((0,X.hG)(ke.M)){}vt.formControlValidators=[...ke.M.formControlValidators,ct],customElements.define("vizier-einddatum",vt);customElements.define("vizier-fase-bewerken",class extends at{static get properties(){return{...super.properties,nieuwe:{state:!0},verwijderd:{state:!0}}}connectedCallback(){super.connectedCallback(),ye("/api/codelijsten/activiteittypes").then((e=>this.types=e))}openVoor(e,t){return this.fase=t,this.nieuwe=[],this.verwijderd=[],this.open(e)}get titel(){return`${this.fase?.naam??"Fase"} bewerken`}get definitief(){return"DEFINITIEVE_VASTSTELLING"===this.fase?.type.code}get activiteiten(){return Ze(this.fase?.activiteiten??[]).filter((e=>!this.verwijderd.includes(e.id)))}get toeTeVoegen(){const e=(this.fase?.activiteiten??[]).filter((e=>"1..*"===e.kardinaliteit)).map((({type:e})=>e)).filter(((e,t,i)=>i.findIndex((({code:t})=>t===e.code))===t));return[...this.types,...e]}aantal(e){return this.activiteiten.filter((t=>t.type.code===e)).length+this.nieuwe.filter((t=>t.type?.code===e)).length}renderVelden(){return c.qy`
            ${this.definitief?this.renderTermijn():c.s6}
            <vl-title type="h3" no-space-bottom>Activiteiten</vl-title>
            <vl-text annotation>De volgorde in de tijdlijn volgt de datums.</vl-text>
            <div class="vl-stacked vl-stacked-medium">
                ${(0,Me.u)(this.activiteiten,(e=>e.id),(e=>this.renderActiviteit(e)))}
                ${(0,Me.u)(this.nieuwe,(e=>e.sleutel),(e=>this.renderNieuw(e)))}
                <div>
                    <vl-button id="activiteit-toevoegen" secondary icon="add" @vl-click=${this.voegToe}
                        >Activiteit toevoegen</vl-button
                    >
                </div>
            </div>
        `}get eindeOpenbaarOnderzoek(){return(this.gegevens?.fasen??[]).flatMap((e=>e.activiteiten)).filter((e=>"OPENBAAR_ONDERZOEK"===e.type.code&&e.einddatum)).map((e=>e.einddatum)).sort().pop()}renderTermijn(){const e=this.eindeOpenbaarOnderzoek,t=e?ve(e,180):"";return c.qy`
            <vl-title type="h3" no-space-bottom>DV-termijn</vl-title>
            <div>
                <vl-form-label
                    for="uiterste-datum"
                    label="Uiterste datum"
                    annotation="(verplicht)"
                    block
                ></vl-form-label>
                <vl-datepicker
                    id="uiterste-datum"
                    name="termijnDefinitieveVaststelling"
                    required
                    block
                    value=${this.gegevens?.termijnDefinitieveVaststelling??t}
                ></vl-datepicker>
                <vl-form-message for="uiterste-datum" variant="annotation"
                    >180 dagen na het einde van het openbaar onderzoek${e?` (${pe(e)})`:""}.
                    Verlenging (+60 dagen) en opschorting bij advies van de Raad van State (+30, soms 45 dagen)
                    registreer je in de principiële vaststelling; pas hier daarna de uiterste datum
                    aan.</vl-form-message
                >
                <vl-form-message for="uiterste-datum" state="valueMissing"
                    >Kies de uiterste datum van de definitieve vaststelling.</vl-form-message
                >
            </div>
        `}renderActiviteit(e){const t=e.id;return c.qy`
            <vl-fieldset border>
                <span slot="legend">${e.naam}</span>
                <div class="vl-stacked vl-stacked-small">
                    ${e.periode?this.renderPeriode(e):this.renderDatum(t,e.datum)}
                    ${"DEFINITIEVE_VASTSTELLING"===e.type.code?c.qy`<vl-form-message for="${t}-datum" variant="annotation"
                              >Deze datum sluit de DV-termijn af.</vl-form-message
                          >`:c.s6}
                    ${e.metReferentie?this.renderReferentie(e):c.s6}
                    ${Ke(e.kardinaliteit,this.aantal(e.type.code))?this.renderVerwijderen(e.naam,(()=>this.verwijderBestaande(e))):c.s6}
                </div>
            </vl-fieldset>
        `}renderDatum(e,t){return c.qy`
            <div>
                <vl-form-label for="${e}-datum" label="Datum" block></vl-form-label>
                <vl-datepicker id="${e}-datum" name="${e}-datum" block value=${t??""}></vl-datepicker>
            </div>
        `}renderPeriode(e){const t=e.id;return c.qy`
            <div>
                <vl-form-label for="${t}-datum" label="Startdatum" block></vl-form-label>
                <vl-datepicker
                    id="${t}-datum"
                    name="${t}-datum"
                    data-startdatum
                    block
                    value=${e.datum??""}
                    @vl-change=${e=>this.vulEinddatumIn(t,e)}
                ></vl-datepicker>
            </div>
            <div>
                <vl-form-label for="${t}-einddatum" label="Einddatum" block></vl-form-label>
                <vizier-einddatum
                    id="${t}-einddatum"
                    name="${t}-einddatum"
                    startdatum="${t}-datum"
                    block
                    value=${e.einddatum??""}
                ></vizier-einddatum>
                <vl-form-message for="${t}-einddatum" variant="annotation"
                    >Standaard ${60} dagen na de startdatum. Je kan deze datum aanpassen.</vl-form-message
                >
                <vl-form-message for="${t}-einddatum" state="customError"
                    >Kies een einddatum na de startdatum.</vl-form-message
                >
            </div>
        `}renderReferentie(e){const t=e.id;return c.qy`
            <div>
                <vl-form-label for="${t}-referentie" label="Referentie Belgisch Staatsblad" block></vl-form-label>
                <vl-input-field
                    id="${t}-referentie"
                    name="${t}-referentie"
                    block
                    autocomplete="off"
                    value=${e.referentie??""}
                ></vl-input-field>
                <vl-form-message for="${t}-referentie" variant="annotation"
                    >De referentie van de publicatie. Bijvoorbeeld: 2027/10234.</vl-form-message
                >
            </div>
        `}renderNieuw(e){const t=e.type?`${e.type.label} (nieuw)`:"Nieuwe activiteit";return c.qy`
            <vl-fieldset border>
                <span slot="legend">${t}</span>
                <div class="vl-stacked vl-stacked-small">
                    <div>
                        <vl-form-label
                            for="${e.sleutel}-type"
                            label="Type activiteit"
                            annotation="(verplicht)"
                            block
                        ></vl-form-label>
                        <vl-select
                            id="${e.sleutel}-type"
                            name="${e.sleutel}-type"
                            placeholder="Selecteer een type"
                            required
                            block
                            .options=${e.opties}
                            @vl-change=${t=>this.kiesType(e,t)}
                        ></vl-select>
                        <vl-form-message for="${e.sleutel}-type" state="valueMissing"
                            >Kies het type van de activiteit.</vl-form-message
                        >
                    </div>
                    ${this.renderDatum(e.sleutel,null)}
                    ${this.renderVerwijderen(t,(()=>this.verwijderNieuw(e)))}
                </div>
            </vl-fieldset>
        `}renderVerwijderen(e,t){return c.qy`
            <div>
                <vl-button tertiary icon="bin" label="${e} verwijderen" @vl-click=${t}
                    >Verwijderen</vl-button
                >
            </div>
        `}vulEinddatumIn(e,t){const i=t.currentTarget.value,n=this.shadowRoot?.querySelector(`#${CSS.escape(`${e}-einddatum`)}`);/^\d{4}-\d{2}-\d{2}$/.test(i)&&n&&!n.value&&(n.value=ve(i,60))}async voegToe(){const e="nieuw-"+ ++this.teller;this.nieuwe=[...this.nieuwe,{sleutel:e,opties:lt(this.toeTeVoegen)}],await this.updateComplete,tt(this.shadowRoot?.querySelector(`#${e}-type`))}kiesType(e,t){e.type=this.toeTeVoegen.find((({code:e})=>e===t.detail?.value)),this.nieuwe=[...this.nieuwe]}async verwijderNieuw(e){this.nieuwe=this.nieuwe.filter((t=>t!==e)),await this.updateComplete,tt(this.shadowRoot?.querySelector("#activiteit-toevoegen"))}async verwijderBestaande(e){this.verwijderd=[...this.verwijderd,e.id],await this.updateComplete,tt(this.shadowRoot?.querySelector("#activiteit-toevoegen"))}async bewaar(e){const t=this.activiteiten.map((t=>({id:t.id,datum:Qe(e,`${t.id}-datum`),einddatum:t.periode?Qe(e,`${t.id}-einddatum`):void 0,referentie:t.metReferentie?Qe(e,`${t.id}-referentie`):void 0}))),i=this.nieuwe.map((({sleutel:t})=>({type:Je(e,`${t}-type`),datum:Qe(e,`${t}-datum`)})));var n,a,r;await(n=this.gegevens.algplanId,a=this.fase.id,r={activiteiten:[...t,...i],...this.definitief?{termijnDefinitieveVaststelling:Qe(e,"termijnDefinitieveVaststelling")}:{}},re("PUT",ne(n,"fasen",a),r))}constructor(){super(),this.types=[],this.teller=0,this.nieuwe=[],this.verwijderd=[]}}),(0,n.gy)([z.a,$.I,D.Y,x.m,R.T,Re.b,r.rC,A.L,G.n,M.L,Pe.U,Ae.F,Ne.ll,Ne.N8]);const pt=["VERANTWOORDELIJKE_PLANNER","PLANNER","GIS_OPERATOR"],ut=e=>{const t=pt.indexOf(e.rol.code);return t<0?pt.length:t},mt=c.AH`
    #team td {
        vertical-align: middle;
    }
    /* Van en Tot: Flux 2.20.0 heeft vl-u-align-center enkel in govflanders-style, niet in vlLayoutStyles */
    #team td:nth-child(4),
    #team td:nth-child(5) {
        text-align: center;
    }
    /* De substap staat onder de toestand van de actieve fase, in de subtitel van vl-step */
    .substap {
        display: block;
    }
    /* Een vl-pill legt haar pill op een tekstregel met de regelhoogte van de pagina: die staat dan lager dan het midden
       van het potlood ernaast. Als flex-container valt die regel weg. */
    .statusregel vl-pill {
        display: flex;
    }
`,gt=()=>c.qy`<vl-text italic>Aan te vullen</vl-text>`;class ht extends c.WF{static get properties(){return{procedureId:{type:String,attribute:"procedure-id"},kenmerken:{state:!0},kenmerkFout:{state:!0},opmerkingenOpen:{state:!0},opmerkingenTeLang:{state:!0}}}static get styles(){return[...o.b,Fe._o,mt]}connectedCallback(){super.connectedCallback(),ye("/api/codelijsten/kenmerken").then((e=>this.kenmerken=e))}get gegevens(){const e=this.procedure.value;return e?.id===this.procedureId?e.gegevens:void 0}get toestand(){return this.gegevens?"geladen":this.procedure.status===Q.e1.ERROR?this.procedure.error instanceof ie?"niet-gevonden":"fout":"laden"}willUpdate(e){e.has("procedureId")&&(this.opmerkingenOpen=!1)}updated(){const e=this.gegevens;document.title=e?`${e.titel} - VIZIER`:"Proceduregegevens - VIZIER",e!==this.getoond&&(this.getoond=e,this.meetOpmerkingen(),this.volgInhoudstafel())}async gewijzigd(e){if(await this.procedure.run(),e?.focus){await this.updateComplete;const t=this.shadowRoot?.querySelector(e.focus)??this.shadowRoot?.querySelector("#tijdlijn");t?.matches("vl-button")?tt(t):t?.focus()}}render(){const e=this.gegevens;return c.qy`
            <vl-functional-header
                title-label="VIZIER"
                link=${(0,v.e)("/")}
                back="Terug naar overzicht"
                back-link=${(0,v.e)("/overzicht")}
                sub-title=${e?.titel??"Proceduregegevens"}
                sticky
                skip-to-content-id="main-content"
            >
                ${e?this.renderActies(e):c.s6}
            </vl-functional-header>
            ${e?this.renderProcedure(e):this.renderZonderProcedure()}
            ${e?this.renderOverlays(e):c.s6}
        `}renderActies(e){const t=e.fasen.some(_e);return c.qy`
            <div class="vl-group vl-margin--small vl-margin--no-bottom" slot="top-right">
                <vl-button
                    id="procedurestap-wijzigen-knop"
                    icon="fastforward"
                    aria-haspopup="dialog"
                    @vl-click=${this.openWijzigen}
                    >Procedurestap wijzigen</vl-button
                >
                <!-- TODO(prototype): disabled of weglaten als er niets te herhalen is (open vraag 14) -->
                <vl-button
                    id="procedurestap-herhalen-knop"
                    secondary
                    icon="text-redo"
                    aria-haspopup="dialog"
                    ?disabled=${!t}
                    @vl-click=${e=>this.openHerhalen(e)}
                    >Procedurestap herhalen</vl-button
                >
            </div>
        `}renderZonderProcedure(){return c.qy`
            <section class="vl-section">
                <div class="vl-content-block vl-stacked vl-stacked-medium">
                    <vl-title type="h1" id="main-content" no-space-bottom>Proceduregegevens</vl-title>
                    ${"niet-gevonden"===this.toestand?c.qy`
                              <vl-alert type="error" icon="warning" title="Deze procedure bestaat niet">
                                  We vonden geen procedure met AlgplanID ${this.procedureId}.
                                  <vl-link href=${(0,v.e)("/overzicht")}>Terug naar overzicht</vl-link>
                              </vl-alert>
                          `:c.s6}
                    ${"fout"===this.toestand?c.qy`
                              <vl-alert type="error" icon="warning" title="De procedure kon niet geladen worden">
                                  Probeer het later opnieuw.
                              </vl-alert>
                          `:c.s6}
                </div>
            </section>
        `}renderProcedure(e){return c.qy`
            <section class="vl-section">
                <!-- TODO(prototype): de hoogte van de sticky functionele header -->
                <vl-side-navigation-layout-next content-block custom-css=":host {--vl-side-navigation-top: 200px}">
                    <div slot="content" class="vl-stacked vl-stacked-medium">
                        ${this.renderTitel(e)} ${this.renderStatus(e)} ${this.renderTegels(e)}
                        ${this.renderBasisgegevens(e)} ${this.renderTeam(e)}
                        ${this.renderKenmerken(e)} ${this.renderTijdlijn(e)}
                    </div>
                    ${this.renderInhoudstafel(e)}
                </vl-side-navigation-layout-next>
            </section>
        `}renderInhoudstafel(e){const t=e.fasen.some((e=>"VOORBEREIDING"!==e.type.code&&"NOG_TE_STARTEN"!==e.toestand));return c.qy`
            <vl-side-navigation-next slot="navigation">
                <ul>
                    <li>
                        <div class="nav-item-wrapper"><vl-link href="#status">Status</vl-link></div>
                    </li>
                    <li>
                        <div class="nav-item-wrapper"><vl-link href="#basisgegevens">Basisgegevens</vl-link></div>
                    </li>
                    <li>
                        <div class="nav-item-wrapper"><vl-link href="#team">Team</vl-link></div>
                    </li>
                    <li>
                        <div class="nav-item-wrapper">
                            <vl-link href="#procedurekenmerken">Procedurekenmerken</vl-link>
                        </div>
                    </li>
                    <li>
                        <div class="nav-item-wrapper">
                            <vl-link href="#tijdlijn">Tijdlijn procedure</vl-link>
                            ${t?c.qy`<vl-button
                                      ghost
                                      icon="arrow-right-fat"
                                      class="toggle-button"
                                      @click=${Ce.vK}
                                  ></vl-button>`:c.s6}
                        </div>
                        ${t?c.qy`<ul>
                                  ${(0,Me.u)(e.fasen,(e=>e.id),(e=>c.qy`<li><vl-link href="#fase-${e.id}">${e.naam}</vl-link></li>`))}
                              </ul>`:c.s6}
                    </li>
                </ul>
            </vl-side-navigation-next>
        `}renderTitel(e){return c.qy`
            <div class="vl-group vl-group--space-between vl-group--align-center">
                <vl-title type="h1" id="main-content" no-space-bottom>${e.titel}</vl-title>
                <vl-button
                    ghost
                    icon="pencil"
                    label="Titel aanpassen"
                    aria-haspopup="dialog"
                    @vl-click=${e=>this.openZijpaneel("vizier-titel-aanpassen",e)}
                ></vl-button>
            </div>
        `}renderStatus(e){const t=e.status;return c.qy`
            <div class="statusregel vl-group vl-group--align-center">
                <vl-title type="h2" appearance="h6" id="status" no-space-bottom>Status</vl-title>
                <vl-pill type=${(t&&(e=>"IN_UITVOERING"===e.code?"success":void 0)(t))??c.s6}>${t?.label??"Niet gestart"}</vl-pill>
                ${e.juridischeStatus?c.qy`<vl-pill>${e.juridischeStatus.label}</vl-pill>`:c.s6}
                <vl-button
                    ghost
                    icon="pencil"
                    label="Status wijzigen"
                    aria-haspopup="dialog"
                    @vl-click=${e=>this.openZijpaneel("vizier-status-wijzigen",e)}
                ></vl-button>
            </div>
        `}renderTegels(e){const t=e.fasen.find((e=>"ACTIEF"===e.toestand)),i=e.termijnDefinitieveVaststelling?((e,t=new Date)=>{const i=de(e,t),n=pe(e);return i<0?{type:"error",tekst:`${n} (verstreken)`}:{type:i<=30?"warning":void 0,tekst:`${n} (${0===i?"vandaag":1===i?"nog 1 dag":`nog ${i} dagen`})`}})(e.termijnDefinitieveVaststelling):void 0;return c.qy`
            <div class="vl-grid">
                ${this.renderTegel("actieve-fase","Actieve fase",c.qy`
                        <div>${t?c.qy`<vl-pill>${t.naam}</vl-pill>`:gt()}</div>
                        <!-- TODO(prototype): de substappen, en een fase zonder, zoals Voorbereiding (open vraag 4) -->
                        <vl-text small
                            >${t?.substap?c.qy`<strong>Actieve substap:</strong> ${t.substap.label}`:"Nog niet opgestart"}</vl-text
                        >
                    `)}
                ${this.renderTegel("termijn","Termijn definitieve vaststelling",i?c.qy`<div><vl-pill type=${i.type??c.s6}>${i.tekst}</vl-pill></div>`:c.qy`
                              <div>${gt()}</div>
                              <vl-text small
                                  >Aan te vullen via procedurestap "Definitieve vaststelling" > "Bewerken".</vl-text
                              >
                          `)}
            </div>
        `}renderTegel(e,t,i){return c.qy`
            <vl-info-tile
                id=${e}
                class="vl-column vl-column--6 vl-column--s-12 vl-column--align-self-stretch"
                full-height
                heading-level="2"
            >
                <span slot="title">${t}</span>
                <div slot="content" class="vl-stacked vl-stacked-small">${i}</div>
            </vl-info-tile>
        `}renderBasisgegevens(e){const t=(e,t)=>c.qy`
            <vl-property>${e}</vl-property>
            <vl-property-data>${t||gt()}</vl-property-data>
        `;return c.qy`
            <vl-info-tile id="basisgegevens" size="medium" highlight-left heading-level="2">
                <span slot="title">Basisgegevens</span>
                <div slot="menu">
                    <vl-button
                        ghost
                        icon="pencil"
                        label="Basisgegevens wijzigen"
                        aria-haspopup="dialog"
                        @vl-click=${e=>this.openZijpaneel("vizier-basisgegevens-wijzigen",e)}
                    ></vl-button>
                </div>
                <div slot="content">
                    <vl-properties no-padding-bottom custom-css=${"\n    .opmerkingen--beperkt {\n        display: -webkit-box;\n        -webkit-box-orient: vertical;\n        -webkit-line-clamp: 3;\n        overflow: hidden;\n    }\n"} @click=${this.leesMeer}>
                        ${t("Dossiertype",e.dossiertype.label)}
                        ${t("Algplanid",e.algplanId)} ${t("Thema",e.thema?.label)}
                        <!-- TODO(prototype): de documentlocatie en de projectwebsite gaan naar een uitlegpagina van
                             VIZIER, dus in hetzelfde tabblad, met het icoon van een externe link; met de echte backend:
                             external -->
                        ${t("Documentlocatie",e.documentlocatie?c.qy`<vl-link
                                      icon="external"
                                      icon-placement="after"
                                      href=${k(e.algplanId)}
                                      >Open documentlocatie</vl-link
                                  >`:void 0)}
                        ${t("Projectwebsite",e.projectwebsite?c.qy`<vl-link
                                      icon="external"
                                      icon-placement="after"
                                      href=${i=e.algplanId,b("projectwebsite",i)}
                                      >${e.projectwebsite}</vl-link
                                  >`:void 0)}
                        ${t("Betrokken gemeenten",e.gemeenten.map((({label:e})=>e)).join(", "))}
                        ${t("Opmerkingen",e.opmerkingen?this.renderOpmerkingen(e.opmerkingen):void 0)}
                    </vl-properties>
                </div>
            </vl-info-tile>
        `;var i}renderOpmerkingen(e){return c.qy`
            <div class="opmerkingen ${this.opmerkingenOpen?"":"opmerkingen--beperkt"}">${e}</div>
            ${this.opmerkingenTeLang||this.opmerkingenOpen?c.qy`<vl-link
                      button-as-link
                      data-actie="lees-meer"
                      aria-expanded=${this.opmerkingenOpen?"true":"false"}
                      >${this.opmerkingenOpen?"Lees minder":"Lees meer"}</vl-link
                  >`:c.s6}
        `}leesMeer(e){e.composedPath().find((e=>"lees-meer"===e.dataset?.actie))&&(this.opmerkingenOpen=!this.opmerkingenOpen)}volgInhoudstafel(){const e=this.shadowRoot?.querySelector("vl-side-navigation-next");if(!e)return;const t=()=>{const t=[...e.querySelectorAll('vl-link[href^="#"]')].map((e=>this.shadowRoot.getElementById(e.getAttribute("href").slice(1)))).filter((e=>null!==e));e.updateObservedElements(t)};e.refreshTableOfContents=t,t()}async meetOpmerkingen(){const e=this.shadowRoot?.querySelector("vl-properties");e&&!this.opmerkingenOpen&&(await e.updateComplete,requestAnimationFrame((()=>{const t=e.shadowRoot?.querySelector(".opmerkingen--beperkt"),i=!!t&&t.scrollHeight>t.clientHeight+1;i!==this.opmerkingenTeLang&&(this.opmerkingenTeLang=i)})))}renderTeam(e){return c.qy`
            <vl-info-tile id="team" size="medium" heading-level="2">
                <span slot="title">Team</span>
                <div slot="menu">
                    <vl-button
                        id="persoon-toevoegen-knop"
                        ghost
                        icon="add"
                        aria-haspopup="dialog"
                        @vl-click=${e=>this.openPersoon(e)}
                        >Persoon toevoegen</vl-button
                    >
                </div>
                <div slot="content">
                    <vl-table aria-label="Team">
                        <table>
                            <thead>
                                <tr>
                                    <th>Naam</th>
                                    <th>Rol</th>
                                    <th>E-mail</th>
                                    <th>Van</th>
                                    <th>Tot</th>
                                    <th><span class="vl-visually-hidden">Acties</span></th>
                                </tr>
                            </thead>
                            <tbody>
                                ${(0,Me.u)((t=e.team,[...t].sort(((e,t)=>ut(e)-ut(t)||(t.van??"").localeCompare(e.van??"")))),(e=>e.id),(e=>c.qy`
                                        <tr>
                                            <td>${e.persoon.label}</td>
                                            <td>${e.rol.label}</td>
                                            <td>
                                                <vl-link
                                                    small
                                                    icon="envelope"
                                                    icon-placement="before"
                                                    href="mailto:${e.email}"
                                                    >${e.email}</vl-link
                                                >
                                            </td>
                                            <td>${e.van?pe(e.van):"—"}</td>
                                            <td>${e.tot?pe(e.tot):"—"}</td>
                                            <td>
                                                <vl-button
                                                    ghost
                                                    icon="pencil"
                                                    label="${e.persoon.label} wijzigen"
                                                    aria-haspopup="dialog"
                                                    @vl-click=${t=>this.openPersoon(t,e)}
                                                ></vl-button>
                                            </td>
                                        </tr>
                                    `))}
                            </tbody>
                        </table>
                    </vl-table>
                </div>
            </vl-info-tile>
        `;var t}renderKenmerken(e){const t=Math.ceil(this.kenmerken.length/2),i=t=>c.qy`
            <div class="vl-column vl-column--6 vl-column--s-12 vl-stacked vl-stacked-small">
                ${t.map((({code:t,label:i})=>c.qy`
                        <div>
                            <vl-pill
                                checkable
                                ?checked=${e.kenmerken.includes(t)}
                                data-kenmerk=${t}
                                @check=${this.wijzigKenmerk}
                                >${i}</vl-pill
                            >
                        </div>
                    `))}
            </div>
        `;return c.qy`
            <vl-info-tile id="procedurekenmerken" size="medium" heading-level="2">
                <span slot="title">Procedurekenmerken</span>
                <div slot="content" class="vl-stacked vl-stacked-small">
                    <div class="vl-grid">
                        ${i(this.kenmerken.slice(0,t))} ${i(this.kenmerken.slice(t))}
                    </div>
                    ${this.kenmerkFout?c.qy`<vl-alert type="error" icon="warning" title="Het kenmerk kon niet bewaard worden">
                              Probeer het later opnieuw.
                          </vl-alert>`:c.s6}
                </div>
            </vl-info-tile>
        `}async wijzigKenmerk(e){const t=e.currentTarget,i=t.dataset.kenmerk,n=this.gegevens,a=e.detail.checked?[...n.kenmerken,i]:n.kenmerken.filter((e=>e!==i));this.kenmerkFout=!1;try{await((e,t)=>re("PUT",ne(e,"kenmerken"),{kenmerken:t}))(n.algplanId,a),this.procedure.run()}catch{t.checked=!e.detail.checked,this.kenmerkFout=!0}}renderTijdlijn(e){const t=e.fasen.filter((e=>"VOORBEREIDING"===e.type.code)),i=e.fasen.filter((e=>"VOORBEREIDING"!==e.type.code)),n=e=>(0,Me.u)(e,(e=>e.id),(e=>(0,we.D)(`${e.toestand}-${e.activiteiten.some(Be)}-${e.nummer}`,this.renderFase(e))));return c.qy`
            <hr class="vl-separator-slash vl-margin--no" />
            <vl-title type="h2" id="tijdlijn" tabindex="-1" no-space-bottom>Tijdlijn procedure</vl-title>
            <vl-steps line>${n(i)}</vl-steps>
            <hr class="vl-separator-wave vl-margin--no" />
            <vl-steps line>${n(t)}</vl-steps>
        `}renderFase(e){const t="VOORBEREIDING"===e.type.code,i="NOG_TE_STARTEN"===e.toestand||"NOG_IN_TE_VULLEN"===e.toestand||t&&"AFGEROND"===e.toestand,n="ACTIEF"===e.toestand?"highlighted":i?"disabled":void 0,a=[t&&"AFGEROND"===e.toestand?void 0:c.qy`<vl-button
                      tertiary
                      icon="pencil"
                      label="${e.naam} bewerken"
                      aria-haspopup="dialog"
                      @vl-click=${t=>this.openFase(t,e)}
                      >Bewerken</vl-button
                  >`,e.verwijderbaar?c.qy`<vl-button
                      tertiary
                      error
                      icon="bin"
                      label="${e.naam} verwijderen"
                      aria-haspopup="dialog"
                      @vl-click=${t=>this.openVerwijderen(t,e)}
                      >Verwijderen</vl-button
                  >`:void 0].filter(Boolean);return c.qy`
            <vl-step
                id="fase-${e.id}"
                type=${n??c.s6}
                ?toggleable=${!t}
                ?default-open=${!t&&"ACTIEF"===e.toestand}
                heading-level="3"
            >
                <span slot="icon">${e.nummer}</span>
                <span slot="title">${e.naam}</span>
                <span slot="subtitle">${We[e.toestand]}</span>
                <!-- De substap van de actieve fase, onder haar toestand (annotatie op frame 5509:42794) -->
                ${e.substap?c.qy`<span slot="subtitle" class="substap vl-margin--small vl-margin--no-bottom"
                          ><strong>Substap:</strong> ${e.substap.label}</span
                      >`:c.s6}
                ${a.length?c.qy`<div slot="content" class="vl-group">${a}</div>`:c.s6}
                ${Ze(e.activiteiten.filter(Be)).map((t=>this.renderActiviteit(e,t)))}
            </vl-step>
        `}renderActiviteit(e,t){const i=Le(t),n=i=>this.openWissen(i,e,t);return c.qy`
            <vl-duration-step slot="duration">
                <div class="vl-group vl-group--align-center">
                    ${i?c.qy`
                              <vl-icon icon="check-thin"></vl-icon>
                              <vl-text bold>${t.naam}</vl-text>
                              <vl-pill closable @close=${n}>${i}</vl-pill>
                          `:c.qy`
                              <vl-text>${t.naam}</vl-text>
                              ${((e,t)=>Ke(e.kardinaliteit,t.filter((t=>t.type.code===e.type.code)).length))(t,e.activiteiten)?c.qy`<vl-button
                                        ghost
                                        icon="bin"
                                        label="${t.naam} verwijderen"
                                        aria-haspopup="dialog"
                                        @vl-click=${n}
                                    ></vl-button>`:c.s6}
                          `}
                </div>
            </vl-duration-step>
        `}renderOverlays(e){return c.qy`
            <vizier-titel-aanpassen .gegevens=${e}></vizier-titel-aanpassen>
            <vizier-status-wijzigen .gegevens=${e}></vizier-status-wijzigen>
            <vizier-basisgegevens-wijzigen .gegevens=${e}></vizier-basisgegevens-wijzigen>
            <vizier-persoon .gegevens=${e}></vizier-persoon>
            <vizier-fase-bewerken .gegevens=${e}></vizier-fase-bewerken>
            <vizier-procedurestap-wijzigen .gegevens=${e}></vizier-procedurestap-wijzigen>
            <vizier-procedurestap-herhalen .gegevens=${e}></vizier-procedurestap-herhalen>
            <vizier-herhaling-verwijderen .gegevens=${e}></vizier-herhaling-verwijderen>
            <vizier-activiteit-wissen .gegevens=${e}></vizier-activiteit-wissen>
        `}overlay(e){return this.shadowRoot.querySelector(e)}zijpaneelVoorbereiden(e){const t=this.overlay(e);return this.shadowRoot.querySelectorAll("vizier-titel-aanpassen, vizier-status-wijzigen, vizier-basisgegevens-wijzigen, vizier-persoon, vizier-fase-bewerken").forEach((e=>{e!==t&&e.isOpen&&e.close()})),t}openZijpaneel(e,t){this.zijpaneelVoorbereiden(e).open(t.currentTarget)}openPersoon(e,t){this.zijpaneelVoorbereiden("vizier-persoon").openVoor(e.currentTarget,t)}openFase(e,t){this.zijpaneelVoorbereiden("vizier-fase-bewerken").openVoor(e.currentTarget,t)}openWijzigen(e){this.overlay("vizier-procedurestap-wijzigen").open(e.currentTarget)}openHerhalen(e){this.overlay("vizier-procedurestap-herhalen").open(e.currentTarget)}openVerwijderen(e,t){this.overlay("vizier-herhaling-verwijderen").openVoor(e.currentTarget,t)}openWissen(e,t,i){this.overlay("vizier-activiteit-wissen").openVoor(e.currentTarget,t,i)}constructor(){super(),this.procedure=new Q.YZ(this,{task:async([e],{signal:t})=>({id:e,gegevens:await ae(e,t)}),args:()=>[this.procedureId]}),this.kenmerken=[],this.kenmerkFout=!1,this.opmerkingenOpen=!1,this.opmerkingenTeLang=!1,this.addEventListener(Xe,(e=>this.gewijzigd(e.detail)))}}customElements.define("vizier-proceduregegevens",ht);const ft=c.AH`
    /* custom classes and styles go here */
`;(0,n.gy)([a.Z,l.Y,l.Q,r.rC]);class bt extends c.WF{static get styles(){return[s.q,...o.b,ft]}render(){return c.qy`
            <vl-template>
                <!-- Slot header -->
                <!-- TODO(prototype): de identifiers van VIZIER, en login-url met profile-token-url of idp-data-url
                     in plaats van simple (analyse van landingspagina, open vraag 8) -->
                <vl-header-next
                    development
                    identifier="59188ff6-662b-45b9-b23a-964ad48c2bfb"
                    simple
                    skip-to-content-id="main-content"
                    slot="header"
                ></vl-header-next>

                <!-- Slot main: vl-template zet het al in een <main> -->
                <div slot="main">${this.renderPrototype()}${this.router.outlet()}</div>

                <!-- Slot footer -->
                <vl-footer-next
                    development
                    identifier="0337f8dc-3266-4e7a-8f4a-95fd65189e5b"
                    slot="footer"
                ></vl-footer-next>
            </vl-template>
        `}renderPrototype(){return c.qy`
            <vl-alert banner type="warning" icon="warning" alert-role="no-role" title="Prototype">
                Dit is een prototype van VIZIER met fictieve gegevens, geen echte toepassing van de Vlaamse overheid.
                Wat je wijzigt, blijft enkel in je browser, tot je de pagina herlaadt.
            </vl-alert>
        `}constructor(...e){super(...e),this.bewaakt=async()=>{const e=await L();return!!K(e)||("niet-aangemeld"===e.status?window.location.assign(p(window.location.pathname)):(window.history.replaceState({},"",(0,v.e)("/")),await this.router.goto((0,v.e)("/"))),!1)},this.router=new d.Ix(this,[{path:(0,v.e)("/"),render:()=>c.qy`<vizier-landingspagina></vizier-landingspagina>`},{path:(0,v.e)("/overzicht"),render:()=>c.qy`<vizier-overzicht></vizier-overzicht>`,enter:this.bewaakt},{path:(0,v.e)("/proceduregegevens/:id"),render:({id:e})=>c.qy`<vizier-proceduregegevens procedure-id=${e}></vizier-proceduregegevens>`,enter:this.bewaakt},{path:(0,v.e)("/extern/:soort"),render:({soort:e})=>c.qy`<vizier-extern
                    soort=${e??""}
                    procedure=${new URLSearchParams(window.location.search).get("procedure")??""}
                ></vizier-extern>`}])}}customElements.define("vizier-app",bt)}}]);