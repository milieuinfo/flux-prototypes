"use strict";(self.webpackChunkvizier=self.webpackChunkvizier||[]).push([[0],{6319:(e,t,n)=>{n.r(t),n.d(t,{VizierAppComponent:()=>vt});var i=n(7209),r=n(6939),a=n(6124),l=n(1870),o=n(8340),s=n(5295),d=n(4246),c=n(9460),v=n(159);const u=(e=(0,v.e)("/"))=>`${(0,v.e)("/mock/aanmelden")}?terug=${encodeURIComponent(e)}`,p=(0,v.e)("/extern/meer-over-grup"),m=(0,v.e)("/extern/proceduregegevens"),g=(0,v.e)("/extern/status-en-termijnopvolging"),h=(0,v.e)("/extern/codelijsten"),f=(0,v.e)("/extern/procedureconfiguratie"),b=(e,t)=>(0,v.e)(`/extern/${e}`)+(t?`?${new URLSearchParams({procedure:t})}`:""),k=e=>b("documentlocatie",e),y="vizier-inhoud@example.com",$="vizier-techniek@example.com";var w=n(4520),z=n(2384),j=n(5454);(0,i.gy)([j.a,w.I,z.Q]);const I={tekst:"Startpagina",route:"/"},E={tekst:"Terug naar overzicht",route:"/overzicht"},q=/^[\w-]+$/,T=e=>({titel:e,uitleg:`${e} is een andere toepassing. In dit prototype bestaat ze nog niet.`,terug:I}),V={proceduregegevens:T("Proceduregegevens"),"status-en-termijnopvolging":T("Status- en termijnopvolging"),codelijsten:T("Codelijsten"),procedureconfiguratie:T("Procedureconfiguratie"),"meer-over-grup":{titel:"Meer over gewestelijke ruimtelijke uitvoeringsplannen",uitleg:"Deze informatiepagina bestaat nog niet in dit prototype.",terug:I},documentlocatie:{titel:"Documentlocatie",uitleg:"In VIZIER opent deze link de documentlocatie van de procedure in SharePoint. In dit prototype zijn de procedures fictief, en bestaat die locatie niet.",terug:E},projectwebsite:{titel:"Projectwebsite",uitleg:"In VIZIER opent deze link de website van het project. In dit prototype zijn de procedures fictief, en bestaat die website niet.",terug:E}},O={titel:"Niet beschikbaar",uitleg:"Deze pagina bestaat niet in dit prototype.",terug:I};class S extends c.WF{static get properties(){return{soort:{type:String},procedure:{type:String}}}static get styles(){return[...s.b]}get pagina(){return Object.hasOwn(V,this.soort)?V[this.soort]:O}get terug(){const{terug:e}=this.pagina;return e===E&&q.test(this.procedure??"")?{tekst:"Terug naar procedure",route:`/proceduregegevens/${encodeURIComponent(this.procedure)}`}:e}updated(){document.title=`${this.pagina.titel} - VIZIER`}render(){const{titel:e,uitleg:t}=this.pagina,n=this.terug;return c.qy`
            <vl-functional-header
                title-label="VIZIER"
                link=${(0,v.e)("/")}
                back=${n.tekst}
                back-link=${(0,v.e)(n.route)}
                sub-title=${e}
                skip-to-content-id="main-content"
            ></vl-functional-header>
            <section class="vl-section">
                <div class="vl-content-block vl-stacked vl-stacked-medium">
                    <vl-title type="h1" id="main-content" no-space-bottom>${e}</vl-title>
                    <vl-paragraph>${t}</vl-paragraph>
                </div>
            </section>
        `}}customElements.define("vizier-extern",S);var x=n(3392),R=n(7684),D=n(7283),A=n(8733),P=n(4825),N=n(1396),C=n(498),F=n(8538),M=n(8817);const Z=n.p+"5dd3c9fc183f54f6e46c.jpg";let L;const B=()=>L??(L=(async()=>{try{const e=await fetch("/api/gebruiker",{headers:{Accept:"application/json"}});return 401===e.status?{status:"niet-aangemeld"}:e.ok?{status:"aangemeld",gebruiker:await e.json()}:{status:"fout"}}catch{return{status:"fout"}}})()),U=e=>"aangemeld"===e.status&&e.gebruiker.rollen.length>0;(0,i.gy)([A.U,w.I,z.Q,x.m,R.Y,D.T,a.rC,P.L,N.Wh,C.Y,F.P,M.L]);class K extends c.WF{static get properties(){return{sessie:{state:!0}}}static get styles(){return[...s.b]}connectedCallback(){super.connectedCallback(),document.title="VIZIER",B().then((e=>this.sessie=e))}render(){const e=this.sessie,t=void 0!==e,n="aangemeld"===e?.status,i="aangemeld"===e?.status&&!U(e);return c.qy`
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
                            <vl-link href=${p} icon="external" icon-placement="after"
                                >Meer over gewestelijke ruimtelijke uitvoeringsplannen</vl-link
                            >
                        </vl-paragraph>
                        ${t&&!n?this.renderAanmelden():c.s6}
                        ${i?this.renderGeenToegang():c.s6}
                    </div>
                    ${t&&!i?this.renderTegels():c.s6}
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
                                <vl-link href="mailto:${y}" icon="mail" icon-placement="after"
                                    >${y}</vl-link
                                >
                            </vl-property-data>
                            <vl-property>Technische vragen</vl-property>
                            <vl-property-data>
                                <vl-link href="mailto:${$}" icon="mail" icon-placement="after"
                                    >${$}</vl-link
                                >
                            </vl-property-data>
                        </vl-properties>
                    </vl-contact-card>
                </div>
            </section>
        `}renderAanmelden(){return c.qy`
            <div class="vl-stacked vl-stacked-small">
                <vl-button icon="burgerprofiel" cta-link=${u()}>Aanmelden bij VIZIER</vl-button>
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
        `}}customElements.define("vizier-landingspagina",K);var G=n(8755),_=n(7767),Y=n(3571),H=n(1767),W=n(2615),X=n(4463),J=n(9816),Q=n(1560);class ee extends Error{}const te={Accept:"application/json"};class ne extends Error{}const ie=(e,...t)=>["/api/procedures",encodeURIComponent(e),...t.map(encodeURIComponent)].join("/"),re=async(e,t)=>{const n=await fetch(ie(e),{headers:te,signal:t});if(404===n.status)throw new ne;if(!n.ok)throw new Error(`De procedure kon niet geladen worden (${n.status})`);return n.json()},ae=async(e,t,n)=>{const i=await fetch(t,{method:e,headers:{...te,"Content-Type":"application/json"},body:void 0===n?void 0:JSON.stringify(n)});if(!i.ok)throw new Error(`De wijziging kon niet bewaard worden (${i.status})`)},le=(e,t,n)=>Math.round(Date.UTC(e,t-1,n)/864e5),oe=(e,t)=>{const[n,i,r]=e.split("-").map(Number);return le(n,i,r)-le(t.getFullYear(),t.getMonth()+1,t.getDate())},se=e=>[e.getUTCFullYear(),e.getUTCMonth()+1,e.getUTCDate()].map((e=>String(e).padStart(2,"0"))).join("-"),de=(e,t)=>{const[n,i,r]=e.split("-").map(Number);return se(new Date(Date.UTC(n,i-1,r+t)))},ce=e=>{const[t,n,i]=e.split("-");return`${i}.${n}.${t}`};var ve=n(5139),ue=n(7370),pe=n(649),me=n(1385),ge=n(9713),he=n(8423),fe=n(4559),be=n(6646);const ke=async e=>{const t=await fetch(e,{headers:{Accept:"application/json"}});if(!t.ok)throw new Error(`${e} kon niet geladen worden (${t.status})`);return t.json()},ye=()=>ke("/api/codelijsten/themas"),$e=()=>ke("/api/codelijsten/gemeenten");class we extends H.Y{}we.formControlValidators=[...H.Y.formControlValidators,{key:"customError",attribute:"bezet",message:"Er bestaat al een procedure met deze AlgplanID.",isValid:(e,t)=>!t||t!==e.getAttribute("bezet")}],customElements.define("vizier-algplan-id-veld",we),(0,i.gy)([ve.B,R.Y,a.rC,ue.E,pe.F,H.Y,me.Y,ge.Al,he.m,fe.M]);const ze=(e,t)=>e.map((({code:e,label:n})=>({label:n,value:e,selected:e===t})));class je extends c.WF{static get properties(){return{dossiertypes:{state:!0},themas:{state:!0},gemeenten:{state:!0},planners:{state:!0},bezig:{state:!0},fout:{state:!0},formulierNummer:{state:!0}}}static get styles(){return[...s.b]}connectedCallback(){super.connectedCallback(),this.laadKeuzelijsten()}open(e){this.terugFocus=e,this.modal?.open()}get modal(){return this.shadowRoot?.querySelector("vl-modal")}get formulier(){return this.shadowRoot?.querySelector("form")}async laadKeuzelijsten(){const[e,t,n,i,r]=await Promise.all([ke("/api/codelijsten/dossiertypes"),ye(),$e(),ke("/api/planners"),B()]),a="aangemeld"===r.status?i.find((({label:e})=>e===r.gebruiker.naam))?.code:void 0;this.dossiertypes=ze(e),this.themas=ze(t),this.gemeenten=ze(n),this.planners=ze(i,a)}render(){return c.qy`
            <vl-modal
                id="nieuwe-procedure"
                title="Procedure starten"
                size="medium"
                closable
                not-cancellable
                not-auto-closable
                @vl-close=${this.gesloten}
            >
                ${(0,be.D)(this.formulierNummer,this.renderFormulier())}
                <div slot="button" class="vl-group">
                    <vl-button icon="add" ?loading=${this.bezig} @vl-click=${this.verstuur}>Start procedure</vl-button>
                    <vl-button secondary @vl-click=${this.sluit}>Annuleren</vl-button>
                </div>
            </vl-modal>
        `}renderFormulier(){return c.qy`
            <form slot="content" class="vl-form vl-stacked vl-stacked-small" @submit=${this.maakAan}>
                <div>
                    <vl-form-label for="titel" label="Titel" annotation="(Verplicht)" block></vl-form-label>
                    <vl-input-field id="titel" name="titel" required block autocomplete="off"></vl-input-field>
                    <vl-form-message for="titel" state="valueMissing"
                        >Vul de titel van de procedure in.</vl-form-message
                    >
                </div>
                <div>
                    <vl-form-label for="dossiertype" label="Dossiertype" annotation="(Verplicht)" block></vl-form-label>
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
                    <vl-form-label for="algplanId" label="Algplanid" annotation="(Verplicht)" block></vl-form-label>
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
                    <!-- TODO(prototype): Thema niet verplicht bij het aanmaken, zoals in de dialoog van het ontwerp -->
                    <vl-form-label for="thema" label="Thema" block></vl-form-label>
                    <vl-select
                        id="thema"
                        name="thema"
                        placeholder="Selecteer een thema"
                        block
                        .options=${this.themas}
                    ></vl-select>
                </div>
                <div>
                    <vl-form-label
                        for="gemeenten"
                        label="Betrokken gemeenten"
                        annotation="(Verplicht)"
                        block
                    ></vl-form-label>
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
                    <vl-form-label for="opmerkingen" label="Opmerkingen" annotation="(Optioneel)" block></vl-form-label>
                    <vl-textarea id="opmerkingen" name="opmerkingen" rows="4" block></vl-textarea>
                </div>
                <div class="vl-grid">
                    <div class="vl-column vl-column--7 vl-column--s-12">
                        <vl-form-label
                            for="planner"
                            label="Verantwoordelijke planner"
                            annotation="(Verplicht)"
                            block
                        ></vl-form-label>
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
                        <vl-form-label for="van" label="Van" annotation="(Verplicht)" block></vl-form-label>
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
        `}verstuur(){this.formulier?.requestSubmit()}async maakAan(e){e.preventDefault();const t=e.target,n=(0,X.Sl)(t),i=e=>"string"==typeof n[e]?n[e]:"",r=n.gemeenten,a={dossiertype:i("dossiertype"),algplanId:i("algplanId"),titel:i("titel"),thema:i("thema"),gemeenten:Array.isArray(r)?r:r?[r]:[],opmerkingen:i("opmerkingen"),verantwoordelijkePlanner:i("verantwoordelijkePlanner"),van:i("van")};this.bezig=!0,this.fout=!1;try{const e=await(async e=>{const t=await fetch("/api/procedures",{method:"POST",headers:{...te,"Content-Type":"application/json"},body:JSON.stringify(e)});if(409===t.status)throw new ee;if(!t.ok)throw new Error(`De procedure kon niet aangemaakt worden (${t.status})`);return(await t.json()).algplanId})(a);this.modal?.close(),this.dispatchEvent(new CustomEvent("procedure-aangemaakt",{detail:{algplanId:e},bubbles:!0}))}catch(e){e instanceof ee?(t.querySelector("#algplanId")?.setAttribute("bezet",a.algplanId),t.requestSubmit()):this.fout=!0}finally{this.bezig=!1}}sluit(){this.modal?.close()}gesloten(){this.fout=!1,this.formulierNummer++,this.terugFocus?.shadowRoot?.querySelector("button")?.focus()}constructor(){super(),this.dossiertypes=[],this.themas=[],this.gemeenten=[],this.planners=[],this.bezig=!1,this.fout=!1,this.formulierNummer=0}}customElements.define("vizier-nieuwe-procedure",je),(0,i.gy)([j.a,w.I,R.Y,x.m,D.T,a.rC,G.n,_.Bn,_.$2,Y.$,H.Y,W.v]);const Ie={sorteer:"algplanId",richting:"asc"},Ee=`\n    @media screen and (min-width: ${J.gT+1}px) {\n        table {\n            table-layout: fixed;\n        }\n        td {\n            overflow-wrap: anywhere;\n        }\n        ${[27.5,17.4,14.5,10.9,16.7,13].map(((e,t)=>`thead th:nth-child(${t+1}) { width: ${e}%; }`)).join("\n")}\n    }\n`,qe=(e,t)=>{(0,c.XX)(c.qy`
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
        `,e)},Te=(e,t)=>{(0,c.XX)(c.qy`
            <div><vl-text small>${t.algplanId}</vl-text></div>
            <div><vl-text annotation>${t.dossiertype}</vl-text></div>
        `,e)},Ve=(e,t)=>{var n;(0,c.XX)(c.qy`<vl-pill type=${n=t.status,("In uitvoering"===n?"success":void 0)??c.s6}>${t.status}</vl-pill>`,e)},Oe=(e,t)=>{const n=t.deadline?((e,t=new Date)=>{const n=oe(e,t);return n<0?{type:"error",tekst:"Verstreken"}:n<=30?{type:"warning",tekst:0===n?"Vandaag":1===n?"Nog 1 dag":`Nog ${n} dagen`}:void 0})(t.deadline):void 0;(0,c.XX)(c.qy`
            ${t.deadline?c.qy`<div>${ce(t.deadline)}</div>`:c.qy`<div>
                      <span aria-hidden="true">-</span><span class="vl-visually-hidden">Geen deadline</span>
                  </div>`}
            ${n?c.qy`<div><vl-pill type=${n.type}>${n.tekst}</vl-pill></div>`:c.s6}
        `,e)};class Se extends c.WF{static get properties(){return{zoekopdracht:{state:!0}}}get resultaat(){return this.zoeken.value}static get styles(){return[...s.b]}connectedCallback(){super.connectedCallback(),document.title="Overzicht - VIZIER"}render(){return c.qy`
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
        `}renderTabel(){const{sorteer:e,richting:t,pagina:n}=this.zoekopdracht;return c.qy`
            <vl-rich-data-table
                label="Procedures"
                custom-css=${Ee}
                .data=${{data:this.resultaat?.procedures??[],paging:{currentPage:n,totalItems:this.resultaat?.totaal??0},sorting:e?[{name:e,direction:t,priority:1}]:[]}}
                @change=${this.wijzigTabel}
            >
                <vl-rich-data-field
                    name="titel"
                    label="Procedure"
                    sortable
                    .renderer=${qe}
                ></vl-rich-data-field>
                <vl-rich-data-field
                    name="algplanId"
                    label="AlgplanID"
                    sortable
                    sorting-direction="asc"
                    .renderer=${Te}
                ></vl-rich-data-field>
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
                    .renderer=${Oe}
                ></vl-rich-data-field>
                <vl-pager slot="pager" items-per-page=${20}></vl-pager>
            </vl-rich-data-table>
        `}leesZoekformulier(){const e=this.shadowRoot?.querySelector('form[role="search"]');if(!e)return;const t=(0,X.Sl)(e);return{zoekterm:t.zoekterm??"",enkelMijn:"true"===t.enkelMijn,gearchiveerd:"true"===t.gearchiveerd}}zoek(e){e.preventDefault();const t=this.leesZoekformulier();t&&(this.zoekopdracht={...this.zoekopdracht,...t,pagina:1})}wijzigVinkje(){const e=this.leesZoekformulier();!e||e.enkelMijn===this.zoekopdracht.enkelMijn&&e.gearchiveerd===this.zoekopdracht.gearchiveerd||(this.zoekopdracht={...this.zoekopdracht,...e,pagina:1})}wijzigTabel(e){if(!e.detail)return;const t=e.detail.sorting?.[0],n=t?.name??Ie.sorteer,i=t?.direction??Ie.richting,r=n!==this.zoekopdracht.sorteer||i!==this.zoekopdracht.richting,a=r?1:e.detail.paging?.currentPage??this.zoekopdracht.pagina;(r||a!==this.zoekopdracht.pagina)&&(this.zoekopdracht={...this.zoekopdracht,sorteer:n,richting:i,pagina:a})}openNieuweProcedure(e){this.shadowRoot?.querySelector("vizier-nieuwe-procedure")?.open(e.currentTarget)}toonNieuweProcedure(e){var t;t=`/proceduregegevens/${encodeURIComponent(e.detail.algplanId)}`,window.history.pushState({},"",(0,v.e)(t)),window.dispatchEvent(new PopStateEvent("popstate"))}constructor(){super(),this.zoeken=new Q.YZ(this,{task:([e],{signal:t})=>(async(e,t)=>{const n=new URLSearchParams({zoekterm:e.zoekterm,pagina:String(e.pagina),perPagina:String(e.perPagina)});e.enkelMijn&&n.set("enkelMijn","true"),e.gearchiveerd&&n.set("gearchiveerd","true"),e.sorteer&&(n.set("sorteer",e.sorteer),n.set("richting",e.richting??"asc"));const i=await fetch(`/api/procedures?${n}`,{headers:te,signal:t});if(!i.ok)throw new Error(`De procedures konden niet geladen worden (${i.status})`);return i.json()})(e,t),args:()=>[this.zoekopdracht]}),this.zoekopdracht={zoekterm:"",enkelMijn:!1,gearchiveerd:!1,...Ie,pagina:1,perPagina:20}}}customElements.define("vizier-overzicht",Se);var xe=n(7713),Re=n(4260),De=n(9792),Ae=n(4054),Pe=n(5151),Ne=n(7171),Ce=n(7911);const Fe=e=>{const t=[...e].reverse();return[...t.filter((e=>!e.datum)),...t.filter((e=>e.datum)).sort(((e,t)=>t.datum.localeCompare(e.datum)))]},Me=e=>{const t=e.findIndex((e=>"ACTIEF"===e.toestand));return t<0?[]:e.slice(0,t).reverse()},Ze=e=>["ACTIEF","AFGEROND","HERHAALD"].includes(e.toestand)&&"VOORBEREIDING"!==e.type.code,Le={NOG_TE_STARTEN:"Nog te starten",NOG_IN_TE_VULLEN:"Nog in te vullen",ACTIEF:"Actief",AFGEROND:"Afgerond",HERHAALD:"Herhaald"};var Be=n(4767);(0,i.gy)([Be.V,ve.B,w.I,R.Y,a.rC,ue.E,pe.F]);const Ue="procedure-gewijzigd",Ke=(e,t)=>"string"==typeof e[t]?e[t]:"",Ge=(e,t)=>Ke(e,t).trim()||null,_e=(e,t)=>{const n=e[t];return Array.isArray(n)?n:n?[n]:[]},Ye=async e=>{await(e?.updateComplete),e?.shadowRoot?.querySelector('input, select, textarea, button, [tabindex="0"]')?.focus()},He=e=>c.qy`
    <vl-alert type="error" icon="warning" title=${e}>Probeer het later opnieuw.</vl-alert>
`;class We extends c.WF{static get properties(){return{gegevens:{attribute:!1},bezig:{state:!0},fout:{state:!0},formulierNummer:{state:!0}}}static get styles(){return[...s.b]}voorbereiden(){}get zijpaneel(){return this.shadowRoot?.querySelector("vl-side-sheet")??null}get formulier(){return this.shadowRoot?.querySelector("form")}get isOpen(){return this.zijpaneel?.hasAttribute("open")??!1}async open(e){this.terugFocus=e,this.fout=!1,this.voorbereiden(),this.formulierNummer++,await this.updateComplete,this.zijpaneel?.open(),requestAnimationFrame((()=>Ye(this.formulier?.querySelector("vl-input-field, vl-select, vl-select-rich, vl-datepicker, vl-textarea, [data-veld]"))))}close(){this.zijpaneel?.close()}firstUpdated(){this.zijpaneel?.onClose((()=>this.gesloten()))}render(){return c.qy`
            <!-- top: onder de globale header en de sticky functionele header (vl-side-sheet). TODO(prototype): de hoogte
                 van de functionele header -->
            <vl-side-sheet hide-toggle-button top="150px" custom-css=":host { --vl-side-sheet-width: 48rem; }">
                ${(0,be.D)(this.formulierNummer,c.qy`
                        <form class="vl-form vl-stacked vl-stacked-small" @submit=${this.verstuur}>
                            <vl-title type="h2" no-space-bottom>${this.titel}</vl-title>
                            ${this.renderVelden()}
                            ${this.fout?He("De wijziging kon niet bewaard worden"):c.s6}
                            <div class="vl-group">
                                <vl-button type="submit" ?loading=${this.bezig}>Opslaan</vl-button>
                                <vl-button secondary @vl-click=${this.close}>Annuleren</vl-button>
                            </div>
                        </form>
                    `)}
            </vl-side-sheet>
        `}async verstuur(e){e.preventDefault();const t=e.target;this.bezig=!0,this.fout=!1;try{await this.bewaar((0,X.Sl)(t),t),this.close(),this.dispatchEvent(new CustomEvent(Ue,{bubbles:!0,composed:!0}))}catch{this.fout=!0}finally{this.bezig=!1}}gesloten(){this.fout=!1,Ye(this.terugFocus)}constructor(){super(),this.bezig=!1,this.fout=!1,this.formulierNummer=0}}class Xe extends c.WF{static get properties(){return{gegevens:{attribute:!1},bezig:{state:!0},fout:{state:!0},formulierNummer:{state:!0}}}static get styles(){return[...s.b]}get gevaarlijk(){return!1}voorbereiden(){}get modal(){return this.shadowRoot?.querySelector("vl-modal")}async open(e){this.terugFocus=e,this.fout=!1,this.voorbereiden(),this.formulierNummer++,await this.updateComplete,this.modal?.open()}close(){this.modal?.close()}render(){return c.qy`
            <vl-modal
                title=${this.titel}
                size="medium"
                closable
                not-cancellable
                not-auto-closable
                @vl-close=${this.gesloten}
            >
                ${(0,be.D)(this.formulierNummer,c.qy`
                        <form slot="content" class="vl-form vl-stacked vl-stacked-small" @submit=${this.verstuur}>
                            ${this.renderInhoud()}
                            ${this.fout?He("De wijziging kon niet bewaard worden"):c.s6}
                        </form>
                    `)}
                <div slot="button" class="vl-group">
                    <vl-button ?error=${this.gevaarlijk} ?loading=${this.bezig} @vl-click=${this.bevestig}
                        >${this.knoptekst}</vl-button
                    >
                    <vl-button secondary @vl-click=${this.close}>Annuleren</vl-button>
                </div>
            </vl-modal>
        `}bevestig(){this.shadowRoot?.querySelector("form")?.requestSubmit()}async verstuur(e){e.preventDefault(),this.bezig=!0,this.fout=!1;try{await this.bewaar((0,X.Sl)(e.target));const t=!this.terugFocusNaWijziging;t&&(this.terugFocus=void 0),this.close(),this.dispatchEvent(new CustomEvent(Ue,{bubbles:!0,composed:!0,detail:{focusTijdlijn:t}}))}catch{this.fout=!0}finally{this.bezig=!1}}get terugFocusNaWijziging(){return!0}gesloten(){this.fout=!1,Ye(this.terugFocus)}constructor(){super(),this.bezig=!1,this.fout=!1,this.formulierNummer=0}}(0,i.gy)([me.Y,he.m]);const Je=(e,t)=>e.map((({id:e,naam:n})=>({label:n,value:e,selected:e===t})));customElements.define("vizier-procedurestap-zetten",class extends Xe{get titel(){return"Procedurestap zetten"}get knoptekst(){return"Procedurestap zetten"}voorbereiden(){const e=Me(this.gegevens?.fasen??[]);this.opties=Je(e,e[0]?.id)}renderInhoud(){const e=(this.gegevens?.fasen??[]).find((e=>"ACTIEF"===e.toestand));return c.qy`
            <p>U sluit <strong>${e?.naam}</strong> af. Kies de procedurestap die daarna start.</p>
            <div>
                <vl-form-label
                    for="volgende-procedurestap"
                    label="Volgende procedurestap"
                    annotation="(Verplicht)"
                    block
                ></vl-form-label>
                <vl-select
                    id="volgende-procedurestap"
                    name="volgende"
                    required
                    block
                    .options=${this.opties}
                ></vl-select>
                <vl-form-message for="volgende-procedurestap" state="valueMissing"
                    >Kies de procedurestap die start.</vl-form-message
                >
            </div>
        `}async bewaar(e){var t,n;await(t=this.gegevens.algplanId,n=Ke(e,"volgende"),ae("POST",ie(t,"procedurestap"),{volgende:n}))}constructor(...e){super(...e),this.opties=[]}});customElements.define("vizier-procedurestap-herhalen",class extends Xe{openVoor(e,t){return this.gekozen=t?.id,this.open(e)}get titel(){return"Procedurestap herhalen"}get knoptekst(){return"Herhalen"}voorbereiden(){this.opties=Je((this.gegevens?.fasen??[]).filter(Ze),this.gekozen)}renderInhoud(){return c.qy`
            <div>
                <vl-form-label
                    for="te-herhalen-procedurestap"
                    label="Procedurestap"
                    annotation="(Verplicht)"
                    block
                ></vl-form-label>
                <vl-select
                    id="te-herhalen-procedurestap"
                    name="fase"
                    placeholder="Selecteer een procedurestap"
                    required
                    block
                    .options=${this.opties}
                ></vl-select>
                <vl-form-message for="te-herhalen-procedurestap" state="valueMissing"
                    >Kies de procedurestap die u herhaalt.</vl-form-message
                >
            </div>
            <div>
                <vl-form-label for="toelichting" label="Toelichting" annotation="(Optioneel)" block></vl-form-label>
                <vl-textarea id="toelichting" name="toelichting" rows="4" block></vl-textarea>
            </div>
        `}async bewaar(e){var t,n,i,r;await(t=this.gegevens.algplanId,n=Ke(e,"fase"),i=Ge(e,"toelichting"),r=((e=new Date)=>se(new Date(Date.UTC(e.getFullYear(),e.getMonth(),e.getDate()))))(),ae("POST",ie(t,"herhalingen"),{fase:n,toelichting:i,datum:r}))}constructor(...e){super(...e),this.opties=[]}});customElements.define("vizier-herhaling-verwijderen",class extends Xe{openVoor(e,t){return this.fase=t,this.open(e)}get titel(){return`${this.fase?.naam??"Herhaling"} verwijderen`}get knoptekst(){return"Verwijderen"}get gevaarlijk(){return!0}get terugFocusNaWijziging(){return!1}renderInhoud(){return c.qy`<p>De herhaalde procedurestap en haar activiteiten verdwijnen uit de tijdlijn.</p>`}async bewaar(){var e,t;await(e=this.gegevens.algplanId,t=this.fase.id,ae("DELETE",ie(e,"fasen",t)))}});var Qe=n(4926);(0,i.gy)([H.Y,me.Y,ge.Al,he.m,fe.M]);const et=(e,t=[])=>e.map((({code:e,label:n})=>({label:n,value:e,selected:t.includes(e)}))),tt="https?://\\S+";class nt extends((0,X.hG)(fe.M)){}nt.formControlValidators=[...fe.M.formControlValidators,{key:"customError",message:"Kies een datum Tot na de datum Van.",dependencySelectors:["#van"],isValid:(e,t)=>{const n=e.form?.querySelector("#van")?.value;return!t||!n||t>n}}],customElements.define("vizier-tot-datum",nt);customElements.define("vizier-titel-aanpassen",class extends We{get titel(){return"Titel aanpassen"}renderVelden(){return c.qy`
            <div>
                <vl-form-label for="titel" label="Titel" annotation="(Verplicht)" block></vl-form-label>
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
        `}async bewaar(e){var t,n;await(t=this.gegevens.algplanId,n=Ke(e,"titel").trim(),ae("PUT",ie(t,"titel"),{titel:n}))}});customElements.define("vizier-status-wijzigen",class extends We{connectedCallback(){super.connectedCallback(),ke("/api/codelijsten/statussen").then((e=>this.statussen=e))}get titel(){return"Status wijzigen"}voorbereiden(){this.opties=et(this.statussen,this.gegevens?.status?[this.gegevens.status.code]:[])}renderVelden(){return c.qy`
            <div>
                <vl-form-label for="status" label="Status" annotation="(Verplicht)" block></vl-form-label>
                <vl-select
                    id="status"
                    name="status"
                    placeholder="Selecteer een status"
                    required
                    block
                    .options=${this.opties}
                ></vl-select>
                <vl-form-message for="status" state="valueMissing">Kies een status.</vl-form-message>
            </div>
        `}async bewaar(e){var t,n;await(t=this.gegevens.algplanId,n=Ke(e,"status"),ae("PUT",ie(t,"status"),{status:n}))}constructor(...e){super(...e),this.statussen=[],this.opties=[]}});customElements.define("vizier-basisgegevens-wijzigen",class extends We{connectedCallback(){super.connectedCallback(),Promise.all([ye(),$e()]).then((([e,t])=>Object.assign(this,{themas:e,gemeenten:t})))}get titel(){return"Basisgegevens wijzigen"}voorbereiden(){this.themaOpties=et(this.themas,this.gegevens?.thema?[this.gegevens.thema.code]:[]),this.gemeenteOpties=et(this.gemeenten,(this.gegevens?.gemeenten??[]).map((e=>e.code)))}renderVelden(){const e=this.gegevens;return c.qy`
            <div>
                <vl-form-label for="thema" label="Thema" annotation="(Verplicht)" block></vl-form-label>
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
                    for="documentlocatie"
                    label="Documentlocatie"
                    annotation="(Optioneel)"
                    block
                ></vl-form-label>
                <vl-input-field
                    id="documentlocatie"
                    name="documentlocatie"
                    type="url"
                    pattern=${tt}
                    block
                    autocomplete="off"
                    value=${e?.documentlocatie??""}
                ></vl-input-field>
                <vl-form-message for="documentlocatie" state="patternMismatch"
                    >Vul een volledige link in. Bijvoorbeeld:
                    https://vlaanderen.sharepoint.com/sites/grup-heverleebos.</vl-form-message
                >
            </div>
            <div>
                <vl-form-label
                    for="projectwebsite"
                    label="Projectwebsite"
                    annotation="(Optioneel)"
                    block
                ></vl-form-label>
                <vl-input-field
                    id="projectwebsite"
                    name="projectwebsite"
                    type="url"
                    pattern=${tt}
                    block
                    autocomplete="off"
                    value=${e?.projectwebsite??""}
                ></vl-input-field>
                <vl-form-message for="projectwebsite" state="patternMismatch"
                    >Vul een volledige link in. Bijvoorbeeld: https://www.project-website.be.</vl-form-message
                >
            </div>
            <div>
                <vl-form-label
                    for="gemeenten"
                    label="Betrokken gemeenten"
                    annotation="(Verplicht)"
                    block
                ></vl-form-label>
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
                <vl-form-label for="opmerkingen" label="Opmerkingen" annotation="(Optioneel)" block></vl-form-label>
                <vl-textarea
                    id="opmerkingen"
                    name="opmerkingen"
                    rows="6"
                    block
                    value=${e?.opmerkingen??""}
                ></vl-textarea>
            </div>
        `}async bewaar(e){var t,n;await(t=this.gegevens.algplanId,n={thema:Ke(e,"thema"),documentlocatie:Ge(e,"documentlocatie"),projectwebsite:Ge(e,"projectwebsite"),gemeenten:_e(e,"gemeenten"),opmerkingen:Ge(e,"opmerkingen")},ae("PUT",ie(t,"basisgegevens"),n))}constructor(...e){super(...e),this.themas=[],this.gemeenten=[],this.themaOpties=[],this.gemeenteOpties=[]}});customElements.define("vizier-persoon",class extends We{connectedCallback(){super.connectedCallback(),Promise.all([ke("/api/codelijsten/rollen"),ke("/api/medewerkers")]).then((([e,t])=>Object.assign(this,{rollen:e,medewerkers:t})))}openVoor(e,t){return this.teamlid=t,this.open(e)}get titel(){return this.teamlid?"Persoon wijzigen":"Persoon toevoegen"}voorbereiden(){this.rolOpties=et(this.rollen,this.teamlid?[this.teamlid.rol.code]:[]),this.persoonOpties=et(this.medewerkers,this.teamlid?[this.teamlid.persoon.code]:[])}renderVelden(){const e=this.teamlid;return c.qy`
            <div>
                <vl-form-label for="rol" label="Rol" annotation="(Verplicht)" block></vl-form-label>
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
                <vl-form-label for="naam" label="Naam" annotation="(Verplicht)" block></vl-form-label>
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
                <vl-form-label for="email" label="E-mailadres" annotation="(Verplicht)" block></vl-form-label>
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
                    <vl-form-label for="van" label="Van" annotation="(Verplicht)" block></vl-form-label>
                    <vl-datepicker id="van" name="van" required block value=${e?.van??""}></vl-datepicker>
                    <vl-form-message for="van" state="valueMissing"
                        >Kies de datum vanaf wanneer de persoon in het team zit.</vl-form-message
                    >
                </div>
                <div class="vl-column vl-column--6 vl-column--s-12">
                    <vl-form-label for="tot" label="Tot" annotation="(Optioneel)" block></vl-form-label>
                    <vizier-tot-datum id="tot" name="tot" block value=${e?.tot??""}></vizier-tot-datum>
                    <vl-form-message for="tot" state="customError">Kies een datum Tot na de datum Van.</vl-form-message>
                </div>
            </div>
        `}vulEmailIn(e){const t=this.medewerkers.find((({code:t})=>t===e.detail?.value)),n=this.shadowRoot?.querySelector("#email");t&&n&&(n.value=t.email)}async bewaar(e){const t={rol:Ke(e,"rol"),persoon:Ke(e,"persoon"),email:Ke(e,"email").trim(),van:Ke(e,"van"),tot:Ge(e,"tot")},n=this.gegevens.algplanId;await(this.teamlid?((e,t,n)=>ae("PUT",ie(e,"team",t),n))(n,this.teamlid.id,t):((e,t)=>ae("POST",ie(e,"team"),t))(n,t))}constructor(...e){super(...e),this.rollen=[],this.medewerkers=[],this.rolOpties=[],this.persoonOpties=[]}}),(0,i.gy)([w.I,D.T,R.Y,Qe.m,fe.M,H.Y,me.Y]);const it={key:"customError",message:"Kies een einddatum na de startdatum.",dependencySelectors:["[data-startdatum]"],isValid:(e,t)=>{const n=e.getAttribute("startdatum"),i=n?e.form?.querySelector(`#${CSS.escape(n)}`)?.value:void 0;return!t||!i||t>=i}};class rt extends((0,X.hG)(fe.M)){}rt.formControlValidators=[...fe.M.formControlValidators,it],customElements.define("vizier-einddatum",rt);customElements.define("vizier-fase-bewerken",class extends We{static get properties(){return{...super.properties,nieuwe:{state:!0},verwijderd:{state:!0}}}connectedCallback(){super.connectedCallback(),ke("/api/codelijsten/activiteittypes").then((e=>this.types=e))}openVoor(e,t){return this.fase=t,this.nieuwe=[],this.verwijderd=[],this.open(e)}get titel(){return`${this.fase?.naam??"Fase"} bewerken`}get definitief(){return"DEFINITIEVE_VASTSTELLING"===this.fase?.type.code}get activiteiten(){return Fe(this.fase?.activiteiten??[]).filter((e=>"HERHAALD"!==e.type.code&&!this.verwijderd.includes(e.id)))}renderVelden(){return c.qy`
            ${this.definitief?this.renderTermijn():c.s6}
            <vl-title type="h3" no-space-bottom>Activiteiten</vl-title>
            <vl-text annotation>De volgorde in de tijdlijn volgt de datums.</vl-text>
            <div class="vl-stacked vl-stacked-medium">
                ${(0,Ce.u)(this.activiteiten,(e=>e.id),(e=>this.renderActiviteit(e)))}
                ${(0,Ce.u)(this.nieuwe,(e=>e.sleutel),(e=>this.renderNieuw(e)))}
                <div>
                    <vl-button id="activiteit-toevoegen" secondary icon="add" @vl-click=${this.voegToe}
                        >Activiteit toevoegen</vl-button
                    >
                </div>
            </div>
        `}get eindeOpenbaarOnderzoek(){return(this.gegevens?.fasen??[]).flatMap((e=>e.activiteiten)).filter((e=>"OPENBAAR_ONDERZOEK"===e.type.code&&e.einddatum)).map((e=>e.einddatum)).sort().pop()}renderTermijn(){const e=this.eindeOpenbaarOnderzoek,t=e?de(e,180):"";return c.qy`
            <vl-title type="h3" no-space-bottom>DV-termijn</vl-title>
            <div>
                <vl-form-label
                    for="uiterste-datum"
                    label="Uiterste datum"
                    annotation="(Verplicht)"
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
                    >180 dagen na het einde van het openbaar onderzoek${e?` (${ce(e)})`:""}.
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
                    ${e.vast?c.s6:this.renderVerwijderen(e.naam,(()=>this.verwijderBestaande(e)))}
                </div>
            </vl-fieldset>
        `}renderDatum(e,t){return c.qy`
            <div>
                <vl-form-label for="${e}-datum" label="Datum" annotation="(Optioneel)" block></vl-form-label>
                <vl-datepicker id="${e}-datum" name="${e}-datum" block value=${t??""}></vl-datepicker>
            </div>
        `}renderPeriode(e){const t=e.id;return c.qy`
            <div>
                <vl-form-label for="${t}-datum" label="Startdatum" annotation="(Optioneel)" block></vl-form-label>
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
                <vl-form-label for="${t}-einddatum" label="Einddatum" annotation="(Optioneel)" block></vl-form-label>
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
                <vl-form-label
                    for="${t}-referentie"
                    label="Referentie Belgisch Staatsblad"
                    annotation="(Optioneel)"
                    block
                ></vl-form-label>
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
                            annotation="(Verplicht)"
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
        `}vulEinddatumIn(e,t){const n=t.currentTarget.value,i=this.shadowRoot?.querySelector(`#${CSS.escape(`${e}-einddatum`)}`);/^\d{4}-\d{2}-\d{2}$/.test(n)&&i&&!i.value&&(i.value=de(n,60))}async voegToe(){const e="nieuw-"+ ++this.teller;this.nieuwe=[...this.nieuwe,{sleutel:e,opties:et(this.types)}],await this.updateComplete,Ye(this.shadowRoot?.querySelector(`#${e}-type`))}kiesType(e,t){e.type=this.types.find((({code:e})=>e===t.detail?.value)),this.nieuwe=[...this.nieuwe]}async verwijderNieuw(e){this.nieuwe=this.nieuwe.filter((t=>t!==e)),await this.updateComplete,Ye(this.shadowRoot?.querySelector("#activiteit-toevoegen"))}async verwijderBestaande(e){this.verwijderd=[...this.verwijderd,e.id],await this.updateComplete,Ye(this.shadowRoot?.querySelector("#activiteit-toevoegen"))}async bewaar(e){const t=this.activiteiten.map((t=>({id:t.id,datum:Ge(e,`${t.id}-datum`),einddatum:t.periode?Ge(e,`${t.id}-einddatum`):void 0,referentie:t.metReferentie?Ge(e,`${t.id}-referentie`):void 0}))),n=this.nieuwe.map((({sleutel:t})=>({type:Ke(e,`${t}-type`),datum:Ge(e,`${t}-datum`)})));var i,r,a;await(i=this.gegevens.algplanId,r=this.fase.id,a={activiteiten:[...t,...n],...this.definitief?{termijnDefinitieveVaststelling:Ge(e,"termijnDefinitieveVaststelling")}:{}},ae("PUT",ie(i,"fasen",r),a))}constructor(){super(),this.types=[],this.teller=0,this.nieuwe=[],this.verwijderd=[]}}),(0,i.gy)([j.a,w.I,R.Y,x.m,D.T,xe.b,a.rC,P.L,G.n,M.L,Re.U,De.F,Ae.ll,Ae.N8]);const at=["VERANTWOORDELIJKE_PLANNER","PLANNER","GIS_OPERATOR"],lt=e=>{const t=at.indexOf(e.rol.code);return t<0?at.length:t},ot=c.AH`
    #team td {
        vertical-align: middle;
    }
    /* Van en Tot: Flux 2.20.0 heeft vl-u-align-center enkel in govflanders-style, niet in vlLayoutStyles */
    #team td:nth-child(4),
    #team td:nth-child(5) {
        text-align: center;
    }
`,st=()=>c.qy`<vl-text italic>Aan te vullen</vl-text>`;class dt extends c.WF{static get properties(){return{procedureId:{type:String,attribute:"procedure-id"},kenmerken:{state:!0},kenmerkFout:{state:!0},opmerkingenOpen:{state:!0},opmerkingenTeLang:{state:!0}}}static get styles(){return[...s.b,Ne._o,ot]}connectedCallback(){super.connectedCallback(),ke("/api/codelijsten/kenmerken").then((e=>this.kenmerken=e))}get gegevens(){const e=this.procedure.value;return e?.id===this.procedureId?e.gegevens:void 0}get toestand(){return this.gegevens?"geladen":this.procedure.status===Q.e1.ERROR?this.procedure.error instanceof ne?"niet-gevonden":"fout":"laden"}willUpdate(e){e.has("procedureId")&&(this.opmerkingenOpen=!1)}updated(){const e=this.gegevens;document.title=e?`${e.titel} - VIZIER`:"Proceduregegevens - VIZIER",e!==this.getoond&&(this.getoond=e,this.meetOpmerkingen(),this.volgInhoudstafel())}async gewijzigd(e){await this.procedure.run(),e?.focusTijdlijn&&(await this.updateComplete,this.shadowRoot?.querySelector("#tijdlijn")?.focus())}render(){const e=this.gegevens;return c.qy`
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
        `}renderActies(e){const t=Me(e.fasen).length>0,n=e.fasen.some(Ze);return c.qy`
            <div class="vl-group vl-margin--small vl-margin--no-bottom" slot="top-right">
                <vl-button
                    id="procedurestap-zetten-knop"
                    icon="fastforward"
                    aria-haspopup="dialog"
                    ?disabled=${!t}
                    @vl-click=${this.openZetten}
                    >Procedurestap zetten</vl-button
                >
                <!-- TODO(prototype): disabled of weglaten als er niets te herhalen is (open vraag 14) -->
                <vl-button
                    id="procedurestap-herhalen-knop"
                    secondary
                    icon="text-redo"
                    aria-haspopup="dialog"
                    ?disabled=${!n}
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
                        ${this.renderTitel(e)} ${this.renderTegels(e)}
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
                                      @click=${Pe.vK}
                                  ></vl-button>`:c.s6}
                        </div>
                        ${t?c.qy`<ul>
                                  ${(0,Ce.u)(e.fasen,(e=>e.id),(e=>c.qy`<li><vl-link href="#fase-${e.id}">${e.naam}</vl-link></li>`))}
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
        `}renderTegels(e){const t=e.fasen.find((e=>"ACTIEF"===e.toestand)),n=e.termijnDefinitieveVaststelling?((e,t=new Date)=>{const n=oe(e,t),i=ce(e);return n<0?{type:"error",tekst:`${i} (verstreken)`}:{type:n<=30?"warning":void 0,tekst:`${i} (${0===n?"vandaag":1===n?"nog 1 dag":`nog ${n} dagen`})`}})(e.termijnDefinitieveVaststelling):void 0,i=e.fasen.find((e=>"DEFINITIEVE_VASTSTELLING"===e.type.code));return c.qy`
            <div class="vl-grid">
                ${this.renderTegel("status","Status",e.status?c.qy`<vl-pill type=${r=e.status,("IN_UITVOERING"===r.code?"success":void 0)??c.s6}
                              >${e.status.label}</vl-pill
                          >`:st(),"Status wijzigen",(e=>this.openZijpaneel("vizier-status-wijzigen",e)))}
                ${this.renderTegel("actieve-fase","Actieve fase",t?c.qy`<vl-pill>${t.naam}</vl-pill>`:st(),`${t?.naam??"Actieve fase"} bewerken`,t?e=>this.openFase(e,t):void 0)}
                ${this.renderTegel("termijn","Termijn definitieve vaststelling",n?c.qy`<vl-pill type=${n.type??c.s6}>${n.tekst}</vl-pill>`:st(),"Termijn definitieve vaststelling bewerken",i?e=>this.openFase(e,i):void 0)}
            </div>
        `;var r}renderTegel(e,t,n,i,r){return c.qy`
            <vl-info-tile
                id=${e}
                class="vl-column vl-column--4 vl-column--s-12 vl-column--align-self-stretch"
                full-height
                heading-level="2"
            >
                <span slot="title">${t}</span>
                <!-- align-center: anders rekt de groep vl-pill uit tot de hoogte van de knop, en staat de pill erboven -->
                <div slot="content" class="vl-group vl-group--align-center">
                    ${n}
                    ${r?c.qy`<vl-button
                              ghost
                              icon="pencil"
                              label=${i}
                              aria-haspopup="dialog"
                              @vl-click=${r}
                          ></vl-button>`:c.s6}
                </div>
            </vl-info-tile>
        `}renderBasisgegevens(e){const t=(e,t)=>c.qy`
            <vl-property>${e}</vl-property>
            <vl-property-data>${t||st()}</vl-property-data>
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
                                      href=${n=e.algplanId,b("projectwebsite",n)}
                                      >${e.projectwebsite}</vl-link
                                  >`:void 0)}
                        ${t("Betrokken gemeenten",e.gemeenten.map((({label:e})=>e)).join(", "))}
                        ${t("Opmerkingen",e.opmerkingen?this.renderOpmerkingen(e.opmerkingen):void 0)}
                    </vl-properties>
                </div>
            </vl-info-tile>
        `;var n}renderOpmerkingen(e){return c.qy`
            <div class="opmerkingen ${this.opmerkingenOpen?"":"opmerkingen--beperkt"}">${e}</div>
            ${this.opmerkingenTeLang||this.opmerkingenOpen?c.qy`<vl-link
                      button-as-link
                      data-actie="lees-meer"
                      aria-expanded=${this.opmerkingenOpen?"true":"false"}
                      >${this.opmerkingenOpen?"Lees minder":"Lees meer"}</vl-link
                  >`:c.s6}
        `}leesMeer(e){e.composedPath().find((e=>"lees-meer"===e.dataset?.actie))&&(this.opmerkingenOpen=!this.opmerkingenOpen)}volgInhoudstafel(){const e=this.shadowRoot?.querySelector("vl-side-navigation-next");if(!e)return;const t=()=>{const t=[...e.querySelectorAll('vl-link[href^="#"]')].map((e=>this.shadowRoot.getElementById(e.getAttribute("href").slice(1)))).filter((e=>null!==e));e.updateObservedElements(t)};e.refreshTableOfContents=t,t()}async meetOpmerkingen(){const e=this.shadowRoot?.querySelector("vl-properties");e&&!this.opmerkingenOpen&&(await e.updateComplete,requestAnimationFrame((()=>{const t=e.shadowRoot?.querySelector(".opmerkingen--beperkt"),n=!!t&&t.scrollHeight>t.clientHeight+1;n!==this.opmerkingenTeLang&&(this.opmerkingenTeLang=n)})))}renderTeam(e){return c.qy`
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
                    <vl-table>
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
                                ${(0,Ce.u)((t=e.team,[...t].sort(((e,t)=>lt(e)-lt(t)||(t.van??"").localeCompare(e.van??"")))),(e=>e.id),(e=>c.qy`
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
                                            <td>${e.van?ce(e.van):"—"}</td>
                                            <td>${e.tot?ce(e.tot):"—"}</td>
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
        `;var t}renderKenmerken(e){const t=Math.ceil(this.kenmerken.length/2),n=t=>c.qy`
            <div class="vl-column vl-column--6 vl-column--s-12 vl-stacked vl-stacked-small">
                ${t.map((({code:t,label:n})=>c.qy`
                        <div>
                            <vl-pill
                                checkable
                                ?checked=${e.kenmerken.includes(t)}
                                data-kenmerk=${t}
                                @check=${this.wijzigKenmerk}
                                >${n}</vl-pill
                            >
                        </div>
                    `))}
            </div>
        `;return c.qy`
            <vl-info-tile id="procedurekenmerken" size="medium" heading-level="2">
                <span slot="title">Procedurekenmerken</span>
                <div slot="content" class="vl-stacked vl-stacked-small">
                    <div class="vl-grid">
                        ${n(this.kenmerken.slice(0,t))} ${n(this.kenmerken.slice(t))}
                    </div>
                    ${this.kenmerkFout?c.qy`<vl-alert type="error" icon="warning" title="Het kenmerk kon niet bewaard worden">
                              Probeer het later opnieuw.
                          </vl-alert>`:c.s6}
                </div>
            </vl-info-tile>
        `}async wijzigKenmerk(e){const t=e.currentTarget,n=t.dataset.kenmerk,i=this.gegevens,r=e.detail.checked?[...i.kenmerken,n]:i.kenmerken.filter((e=>e!==n));this.kenmerkFout=!1;try{await((e,t)=>ae("PUT",ie(e,"kenmerken"),{kenmerken:t}))(i.algplanId,r),this.procedure.run()}catch{t.checked=!e.detail.checked,this.kenmerkFout=!0}}renderTijdlijn(e){const t=e.fasen.filter((e=>"VOORBEREIDING"===e.type.code)),n=e.fasen.filter((e=>"VOORBEREIDING"!==e.type.code)),i=e=>(0,Ce.u)(e,(e=>e.id),(e=>(0,be.D)(`${e.toestand}-${e.activiteiten.length>0}-${e.nummer}`,this.renderFase(e))));return c.qy`
            <hr class="vl-separator-slash vl-margin--no" />
            <vl-title type="h2" id="tijdlijn" tabindex="-1" no-space-bottom>Tijdlijn procedure</vl-title>
            <vl-steps line>${i(n)}</vl-steps>
            <hr class="vl-separator-wave vl-margin--no" />
            <vl-steps line>${i(t)}</vl-steps>
        `}renderFase(e){const t="VOORBEREIDING"===e.type.code,n="NOG_TE_STARTEN"===e.toestand||"NOG_IN_TE_VULLEN"===e.toestand||t&&"AFGEROND"===e.toestand,i="ACTIEF"===e.toestand?"highlighted":n?"disabled":void 0,r=[Ze(e)?c.qy`<vl-button
                      tertiary
                      icon="text-redo"
                      label="${e.naam} herhalen"
                      aria-haspopup="dialog"
                      @vl-click=${t=>this.openHerhalen(t,e)}
                      >Herhalen</vl-button
                  >`:void 0,t&&"AFGEROND"===e.toestand?void 0:c.qy`<vl-button
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
                type=${i??c.s6}
                ?toggleable=${!t}
                ?default-open=${!t&&"ACTIEF"===e.toestand}
                heading-level="3"
            >
                <span slot="icon">${e.nummer}</span>
                <span slot="title">${e.naam}</span>
                <span slot="subtitle">${Le[e.toestand]}</span>
                ${r.length?c.qy`<div slot="content" class="vl-group">${r}</div>`:c.s6}
                ${Fe(e.activiteiten).map((e=>{const t=(e=>{if(e.datum)return"VERSLAG_PLANTEAM"===e.type.code?"publication":"check-thin"})(e);return c.qy`<vl-duration-step slot="duration"
                        >${t?c.qy`<vl-icon icon=${t}></vl-icon> `:c.s6}<vl-text
                            ?bold=${"check-thin"===t}
                            >${(e=>{const t=e.datum?ce(e.datum):void 0;if("HERHAALD"===e.type.code)return[e.naam,t,e.toelichting].filter(Boolean).join(" - ");if(!t)return e.naam;const n=e.periode&&e.einddatum?` tot ${ce(e.einddatum)}`:"";return`${e.naam} - ${t}${n}`})(e)}</vl-text
                        ></vl-duration-step
                    >`}))}
            </vl-step>
        `}renderOverlays(e){return c.qy`
            <vizier-titel-aanpassen .gegevens=${e}></vizier-titel-aanpassen>
            <vizier-status-wijzigen .gegevens=${e}></vizier-status-wijzigen>
            <vizier-basisgegevens-wijzigen .gegevens=${e}></vizier-basisgegevens-wijzigen>
            <vizier-persoon .gegevens=${e}></vizier-persoon>
            <vizier-fase-bewerken .gegevens=${e}></vizier-fase-bewerken>
            <vizier-procedurestap-zetten .gegevens=${e}></vizier-procedurestap-zetten>
            <vizier-procedurestap-herhalen .gegevens=${e}></vizier-procedurestap-herhalen>
            <vizier-herhaling-verwijderen .gegevens=${e}></vizier-herhaling-verwijderen>
        `}overlay(e){return this.shadowRoot.querySelector(e)}zijpaneelVoorbereiden(e){const t=this.overlay(e);return this.shadowRoot.querySelectorAll("vizier-titel-aanpassen, vizier-status-wijzigen, vizier-basisgegevens-wijzigen, vizier-persoon, vizier-fase-bewerken").forEach((e=>{e!==t&&e.isOpen&&e.close()})),t}openZijpaneel(e,t){this.zijpaneelVoorbereiden(e).open(t.currentTarget)}openPersoon(e,t){this.zijpaneelVoorbereiden("vizier-persoon").openVoor(e.currentTarget,t)}openFase(e,t){this.zijpaneelVoorbereiden("vizier-fase-bewerken").openVoor(e.currentTarget,t)}openZetten(e){this.overlay("vizier-procedurestap-zetten").open(e.currentTarget)}openHerhalen(e,t){this.overlay("vizier-procedurestap-herhalen").openVoor(e.currentTarget,t)}openVerwijderen(e,t){this.overlay("vizier-herhaling-verwijderen").openVoor(e.currentTarget,t)}constructor(){super(),this.procedure=new Q.YZ(this,{task:async([e],{signal:t})=>({id:e,gegevens:await re(e,t)}),args:()=>[this.procedureId]}),this.kenmerken=[],this.kenmerkFout=!1,this.opmerkingenOpen=!1,this.opmerkingenTeLang=!1,this.addEventListener(Ue,(e=>this.gewijzigd(e.detail)))}}customElements.define("vizier-proceduregegevens",dt);const ct=c.AH`
    /* custom classes and styles go here */
`;(0,i.gy)([r.Z,l.Y,l.Q,a.rC]);class vt extends c.WF{static get styles(){return[o.q,...s.b,ct]}render(){return c.qy`
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
        `}constructor(...e){super(...e),this.bewaakt=async()=>{const e=await B();return!!U(e)||("niet-aangemeld"===e.status?window.location.assign(u(window.location.pathname)):(window.history.replaceState({},"",(0,v.e)("/")),await this.router.goto((0,v.e)("/"))),!1)},this.router=new d.Ix(this,[{path:(0,v.e)("/"),render:()=>c.qy`<vizier-landingspagina></vizier-landingspagina>`},{path:(0,v.e)("/overzicht"),render:()=>c.qy`<vizier-overzicht></vizier-overzicht>`,enter:this.bewaakt},{path:(0,v.e)("/proceduregegevens/:id"),render:({id:e})=>c.qy`<vizier-proceduregegevens procedure-id=${e}></vizier-proceduregegevens>`,enter:this.bewaakt},{path:(0,v.e)("/extern/:soort"),render:({soort:e})=>c.qy`<vizier-extern
                    soort=${e??""}
                    procedure=${new URLSearchParams(window.location.search).get("procedure")??""}
                ></vizier-extern>`}])}}customElements.define("vizier-app",vt)}}]);