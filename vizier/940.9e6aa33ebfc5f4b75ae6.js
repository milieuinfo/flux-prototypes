"use strict";(self.webpackChunkvizier=self.webpackChunkvizier||[]).push([[940],{1971:(e,t,i)=>{i.r(t),i.d(t,{VizierAppComponent:()=>We});var n=i(5185),r=i(1283),a=i(1588),l=i(4502),s=i(9452),o=i(4727),d=i(5674),c=i(9736),v=i(9574);const u=(e=(0,v.e)("/"))=>`${(0,v.e)("/mock/aanmelden")}?terug=${encodeURIComponent(e)}`,p="vizier-inhoud@example.com",m="vizier-techniek@example.com";var h=i(8144),g=i(4680),f=i(6552),b=i(3372),k=i(5803),y=i(6277),w=i(8977),$=i(8412),z=i(3773),j=i(5682),q=i(6729);const E=i.p+"5dd3c9fc183f54f6e46c.jpg";let I;const T=()=>I??(I=(async()=>{try{const e=await fetch("/api/gebruiker",{headers:{Accept:"application/json"}});return 401===e.status?{status:"niet-aangemeld"}:e.ok?{status:"aangemeld",gebruiker:await e.json()}:{status:"fout"}}catch{return{status:"fout"}}})()),V=e=>"aangemeld"===e.status&&e.gebruiker.rollen.length>0;(0,n.gy)([y.U,h.I,g.Q,f.m,b.Y,k.T,a.rC,w.L,$.Wh,z.Y,j.P,q.L]);class O extends c.WF{static get properties(){return{sessie:{state:!0}}}static get styles(){return[...o.b]}connectedCallback(){super.connectedCallback(),document.title="VIZIER",T().then((e=>this.sessie=e))}render(){const e=this.sessie,t=void 0!==e,i="aangemeld"===e?.status,n="aangemeld"===e?.status&&!V(e);return c.qy`
            <vl-content-header>
                <img slot="image" src=${E} alt="" />
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
                            <vl-link href=${"#"} external
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
                                <vl-link href="mailto:${p}" icon="mail" icon-placement="after"
                                    >${p}</vl-link
                                >
                            </vl-property-data>
                            <vl-property>Technische vragen</vl-property>
                            <vl-property-data>
                                <vl-link href="mailto:${m}" icon="mail" icon-placement="after"
                                    >${m}</vl-link
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
                        <vl-link href=${"#"} external>Status- en termijnopvolging</vl-link>
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
                        <vl-link href=${"#"} external>Codelijsten</vl-link>
                        <vl-link href=${"#"} external>Procedureconfiguratie</vl-link>
                    </div>
                </vl-info-tile>
            </div>
        `}}customElements.define("vizier-landingspagina",O);var S=i(3158),D=i(1483),R=i(175),A=i(1083),x=i(8863),P=i(5295),N=i(7639),C=i(6816),F=i(7988);class M extends Error{}const B={Accept:"application/json"};class L extends Error{}const Z=(e,...t)=>["/api/procedures",encodeURIComponent(e),...t.map(encodeURIComponent)].join("/"),U=async(e,t)=>{const i=await fetch(Z(e),{headers:B,signal:t});if(404===i.status)throw new L;if(!i.ok)throw new Error(`De procedure kon niet geladen worden (${i.status})`);return i.json()},K=async(e,t,i)=>{const n=await fetch(t,{method:e,headers:{...B,"Content-Type":"application/json"},body:void 0===i?void 0:JSON.stringify(i)});if(!n.ok)throw new Error(`De wijziging kon niet bewaard worden (${n.status})`)},G=(e,t,i)=>Math.round(Date.UTC(e,t-1,i)/864e5),_=(e,t)=>{const[i,n,r]=e.split("-").map(Number);return G(i,n,r)-G(t.getFullYear(),t.getMonth()+1,t.getDate())},Y=e=>[e.getUTCFullYear(),e.getUTCMonth()+1,e.getUTCDate()].map((e=>String(e).padStart(2,"0"))).join("-"),H=(e,t)=>{const[i,n,r]=e.split("-").map(Number);return Y(new Date(Date.UTC(i,n-1,r+t)))},W=e=>{const[t,i,n]=e.split("-");return`${n}.${i}.${t}`};var X=i(4907),J=i(1266),Q=i(5441),ee=i(1009),te=i(3481),ie=i(6799),ne=i(4871),re=i(3130);const ae=async e=>{const t=await fetch(e,{headers:{Accept:"application/json"}});if(!t.ok)throw new Error(`${e} kon niet geladen worden (${t.status})`);return t.json()},le=()=>ae("/api/codelijsten/themas"),se=()=>ae("/api/codelijsten/gemeenten");class oe extends x.Y{}oe.formControlValidators=[...x.Y.formControlValidators,{key:"customError",attribute:"bezet",message:"Er bestaat al een procedure met deze AlgplanID.",isValid:(e,t)=>!t||t!==e.getAttribute("bezet")}],customElements.define("vizier-algplan-id-veld",oe),(0,n.gy)([X.B,b.Y,a.rC,J.E,Q.F,x.Y,ee.Y,te.Al,ie.m,ne.M]);const de=(e,t)=>e.map((({code:e,label:i})=>({label:i,value:e,selected:e===t})));class ce extends c.WF{static get properties(){return{dossiertypes:{state:!0},themas:{state:!0},gemeenten:{state:!0},planners:{state:!0},bezig:{state:!0},fout:{state:!0},formulierNummer:{state:!0}}}static get styles(){return[...o.b]}connectedCallback(){super.connectedCallback(),this.laadKeuzelijsten()}open(e){this.terugFocus=e,this.modal?.open()}get modal(){return this.shadowRoot?.querySelector("vl-modal")}get formulier(){return this.shadowRoot?.querySelector("form")}async laadKeuzelijsten(){const[e,t,i,n,r]=await Promise.all([ae("/api/codelijsten/dossiertypes"),le(),se(),ae("/api/planners"),T()]),a="aangemeld"===r.status?n.find((({label:e})=>e===r.gebruiker.naam))?.code:void 0;this.dossiertypes=de(e),this.themas=de(t),this.gemeenten=de(i),this.planners=de(n,a)}render(){return c.qy`
            <vl-modal
                id="nieuwe-procedure"
                title="Nieuwe procedure"
                size="medium"
                closable
                not-cancellable
                not-auto-closable
                @vl-close=${this.gesloten}
            >
                ${(0,re.D)(this.formulierNummer,this.renderFormulier())}
                <div slot="button" class="vl-group">
                    <vl-button icon="add" ?loading=${this.bezig} @vl-click=${this.verstuur}
                        >Maak procedure aan</vl-button
                    >
                    <vl-button secondary @vl-click=${this.sluit}>Annuleren</vl-button>
                </div>
            </vl-modal>
        `}renderFormulier(){return c.qy`
            <form slot="content" class="vl-form vl-stacked vl-stacked-small" @submit=${this.maakAan}>
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
                    <vl-form-label for="titel" label="Titel" annotation="(Verplicht)" block></vl-form-label>
                    <vl-input-field id="titel" name="titel" required block autocomplete="off"></vl-input-field>
                    <vl-form-message for="titel" state="valueMissing"
                        >Vul de titel van de procedure in.</vl-form-message
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
        `}verstuur(){this.formulier?.requestSubmit()}async maakAan(e){e.preventDefault();const t=e.target,i=(0,N.Sl)(t),n=e=>"string"==typeof i[e]?i[e]:"",r=i.gemeenten,a={dossiertype:n("dossiertype"),algplanId:n("algplanId"),titel:n("titel"),thema:n("thema"),gemeenten:Array.isArray(r)?r:r?[r]:[],opmerkingen:n("opmerkingen"),verantwoordelijkePlanner:n("verantwoordelijkePlanner"),van:n("van")};this.bezig=!0,this.fout=!1;try{const e=await(async e=>{const t=await fetch("/api/procedures",{method:"POST",headers:{...B,"Content-Type":"application/json"},body:JSON.stringify(e)});if(409===t.status)throw new M;if(!t.ok)throw new Error(`De procedure kon niet aangemaakt worden (${t.status})`);return(await t.json()).algplanId})(a);this.modal?.close(),this.dispatchEvent(new CustomEvent("procedure-aangemaakt",{detail:{algplanId:e},bubbles:!0}))}catch(e){e instanceof M?(t.querySelector("#algplanId")?.setAttribute("bezet",a.algplanId),t.requestSubmit()):this.fout=!0}finally{this.bezig=!1}}sluit(){this.modal?.close()}gesloten(){this.fout=!1,this.formulierNummer++,this.terugFocus?.shadowRoot?.querySelector("button")?.focus()}constructor(){super(),this.dossiertypes=[],this.themas=[],this.gemeenten=[],this.planners=[],this.bezig=!1,this.fout=!1,this.formulierNummer=0}}customElements.define("vizier-nieuwe-procedure",ce),(0,n.gy)([S.a,h.I,b.Y,f.m,k.T,a.rC,D.n,R.Bn,R.$2,A.$,x.Y,P.v]);const ve={sorteer:"algplanId",richting:"asc"},ue=`\n    @media screen and (min-width: ${C.gT+1}px) {\n        table {\n            table-layout: fixed;\n        }\n        td {\n            overflow-wrap: anywhere;\n        }\n        ${[27.5,17.4,14.5,10.9,16.7,13].map(((e,t)=>`thead th:nth-child(${t+1}) { width: ${e}%; }`)).join("\n")}\n    }\n`,pe=(e,t)=>{(0,c.XX)(c.qy`
            <div>
                <vl-link small href=${(0,v.e)(`/proceduregegevens/${encodeURIComponent(t.algplanId)}`)}
                    >${t.titel}</vl-link
                >
            </div>
            ${t.documentlocatie?c.qy`
                      <div>
                          <!-- TODO(prototype): de naam van de link voor een schermlezer, na review -->
                          <vl-link
                              small
                              external
                              href=${t.documentlocatie}
                              label="Open documentlocatie van ${t.titel}"
                              >Open documentlocatie</vl-link
                          >
                      </div>
                  `:c.s6}
        `,e)},me=(e,t)=>{(0,c.XX)(c.qy`
            <div><vl-text small>${t.algplanId}</vl-text></div>
            <div><vl-text annotation>${t.dossiertype}</vl-text></div>
        `,e)},he=(e,t)=>{var i;(0,c.XX)(c.qy`<vl-pill type=${i=t.status,("In uitvoering"===i?"success":void 0)??c.s6}>${t.status}</vl-pill>`,e)},ge=(e,t)=>{const i=t.deadline?((e,t=new Date)=>{const i=_(e,t);return i<0?{type:"error",tekst:"Verstreken"}:i<=30?{type:"warning",tekst:0===i?"Vandaag":1===i?"Nog 1 dag":`Nog ${i} dagen`}:void 0})(t.deadline):void 0;(0,c.XX)(c.qy`
            ${t.deadline?c.qy`<div>${W(t.deadline)}</div>`:c.s6}
            ${i?c.qy`<div><vl-pill type=${i.type}>${i.tekst}</vl-pill></div>`:c.s6}
        `,e)};class fe extends c.WF{static get properties(){return{zoekopdracht:{state:!0}}}get resultaat(){return this.zoeken.value}static get styles(){return[...o.b]}connectedCallback(){super.connectedCallback(),document.title="Overzicht - VIZIER"}render(){return c.qy`
            <vl-functional-header
                title-label="VIZIER"
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
                        >Nieuwe procedure</vl-button
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
                        <div class="vl-group vl-group--input-group">
                            <vl-input-field
                                input-group
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
                                ?loading=${this.zoeken.status===F.e1.PENDING}
                            ></vl-button>
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
                    ${this.zoeken.status===F.e1.ERROR?this.renderFout():c.qy`${this.renderAantal()} ${this.renderTabel()}`}
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
                custom-css=${ue}
                .data=${{data:this.resultaat?.procedures??[],paging:{currentPage:i,totalItems:this.resultaat?.totaal??0},sorting:e?[{name:e,direction:t,priority:1}]:[]}}
                @change=${this.wijzigTabel}
            >
                <vl-rich-data-field
                    name="titel"
                    label="Procedure"
                    sortable
                    .renderer=${pe}
                ></vl-rich-data-field>
                <vl-rich-data-field
                    name="algplanId"
                    label="AlgplanID"
                    sortable
                    sorting-direction="asc"
                    .renderer=${me}
                ></vl-rich-data-field>
                <vl-rich-data-field
                    name="procedurestap"
                    label="Procedurestap"
                    selector="procedurestap"
                    sortable
                ></vl-rich-data-field>
                <vl-rich-data-field name="status" label="Status" sortable .renderer=${he}></vl-rich-data-field>
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
                    .renderer=${ge}
                ></vl-rich-data-field>
                <vl-pager slot="pager" items-per-page=${20}></vl-pager>
            </vl-rich-data-table>
        `}leesZoekformulier(){const e=this.shadowRoot?.querySelector('form[role="search"]');if(!e)return;const t=(0,N.Sl)(e);return{zoekterm:t.zoekterm??"",enkelMijn:"true"===t.enkelMijn,gearchiveerd:"true"===t.gearchiveerd}}zoek(e){e.preventDefault();const t=this.leesZoekformulier();t&&(this.zoekopdracht={...this.zoekopdracht,...t,pagina:1})}wijzigVinkje(){const e=this.leesZoekformulier();!e||e.enkelMijn===this.zoekopdracht.enkelMijn&&e.gearchiveerd===this.zoekopdracht.gearchiveerd||(this.zoekopdracht={...this.zoekopdracht,...e,pagina:1})}wijzigTabel(e){if(!e.detail)return;const t=e.detail.sorting?.[0],i=t?.name??ve.sorteer,n=t?.direction??ve.richting,r=i!==this.zoekopdracht.sorteer||n!==this.zoekopdracht.richting,a=r?1:e.detail.paging?.currentPage??this.zoekopdracht.pagina;(r||a!==this.zoekopdracht.pagina)&&(this.zoekopdracht={...this.zoekopdracht,sorteer:i,richting:n,pagina:a})}openNieuweProcedure(e){this.shadowRoot?.querySelector("vizier-nieuwe-procedure")?.open(e.currentTarget)}toonNieuweProcedure(e){var t;t=`/proceduregegevens/${encodeURIComponent(e.detail.algplanId)}`,window.history.pushState({},"",(0,v.e)(t)),window.dispatchEvent(new PopStateEvent("popstate"))}constructor(){super(),this.zoeken=new F.YZ(this,{task:([e],{signal:t})=>(async(e,t)=>{const i=new URLSearchParams({zoekterm:e.zoekterm,pagina:String(e.pagina),perPagina:String(e.perPagina)});e.enkelMijn&&i.set("enkelMijn","true"),e.gearchiveerd&&i.set("gearchiveerd","true"),e.sorteer&&(i.set("sorteer",e.sorteer),i.set("richting",e.richting??"asc"));const n=await fetch(`/api/procedures?${i}`,{headers:B,signal:t});if(!n.ok)throw new Error(`De procedures konden niet geladen worden (${n.status})`);return n.json()})(e,t),args:()=>[this.zoekopdracht]}),this.zoekopdracht={zoekterm:"",enkelMijn:!1,gearchiveerd:!1,...ve,pagina:1,perPagina:20}}}customElements.define("vizier-overzicht",fe);var be=i(6009),ke=i(9724),ye=i(6216),we=i(6446),$e=i(9063),ze=i(4747),je=i(4899);const qe=e=>{const t=[...e].reverse();return[...t.filter((e=>!e.datum)),...t.filter((e=>e.datum)).sort(((e,t)=>t.datum.localeCompare(e.datum)))]},Ee=e=>{const t=e.findIndex((e=>"ACTIEF"===e.toestand));return t<0?[]:e.slice(0,t).reverse()},Ie=e=>["ACTIEF","AFGEROND","HERHAALD"].includes(e.toestand)&&"VOORBEREIDING"!==e.type.code,Te={NOG_TE_STARTEN:"Nog te starten",NOG_IN_TE_VULLEN:"Nog in te vullen",ACTIEF:"Actief",AFGEROND:"Afgerond",HERHAALD:"Herhaald"};var Ve=i(2743);(0,n.gy)([Ve.V,X.B,h.I,b.Y,a.rC,J.E,Q.F]);const Oe="procedure-gewijzigd",Se=(e,t)=>"string"==typeof e[t]?e[t]:"",De=(e,t)=>Se(e,t).trim()||null,Re=(e,t)=>{const i=e[t];return Array.isArray(i)?i:i?[i]:[]},Ae=async e=>{await(e?.updateComplete),e?.shadowRoot?.querySelector('input, select, textarea, button, [tabindex="0"]')?.focus()},xe=e=>c.qy`
    <vl-alert type="error" icon="warning" title=${e}>Probeer het later opnieuw.</vl-alert>
`;class Pe extends c.WF{static get properties(){return{gegevens:{attribute:!1},bezig:{state:!0},fout:{state:!0},formulierNummer:{state:!0}}}static get styles(){return[...o.b]}voorbereiden(){}get zijpaneel(){return this.shadowRoot?.querySelector("vl-side-sheet")??null}get formulier(){return this.shadowRoot?.querySelector("form")}get isOpen(){return this.zijpaneel?.hasAttribute("open")??!1}async open(e){this.terugFocus=e,this.fout=!1,this.voorbereiden(),this.formulierNummer++,await this.updateComplete,this.zijpaneel?.open(),requestAnimationFrame((()=>Ae(this.formulier?.querySelector("vl-input-field, vl-select, vl-select-rich, vl-datepicker, vl-textarea, [data-veld]"))))}close(){this.zijpaneel?.close()}firstUpdated(){this.zijpaneel?.onClose((()=>this.gesloten()))}render(){return c.qy`
            <!-- top: onder de globale header en de sticky functionele header (vl-side-sheet). TODO(prototype): de hoogte
                 van de functionele header -->
            <vl-side-sheet hide-toggle-button top="150px" custom-css=":host { --vl-side-sheet-width: 48rem; }">
                ${(0,re.D)(this.formulierNummer,c.qy`
                        <form class="vl-form vl-stacked vl-stacked-small" @submit=${this.verstuur}>
                            <vl-title type="h2" no-space-bottom>${this.titel}</vl-title>
                            ${this.renderVelden()}
                            ${this.fout?xe("De wijziging kon niet bewaard worden"):c.s6}
                            <div class="vl-group">
                                <vl-button type="submit" ?loading=${this.bezig}>Opslaan</vl-button>
                                <vl-button secondary @vl-click=${this.close}>Annuleren</vl-button>
                            </div>
                        </form>
                    `)}
            </vl-side-sheet>
        `}async verstuur(e){e.preventDefault();const t=e.target;this.bezig=!0,this.fout=!1;try{await this.bewaar((0,N.Sl)(t),t),this.close(),this.dispatchEvent(new CustomEvent(Oe,{bubbles:!0,composed:!0}))}catch{this.fout=!0}finally{this.bezig=!1}}gesloten(){this.fout=!1,Ae(this.terugFocus)}constructor(){super(),this.bezig=!1,this.fout=!1,this.formulierNummer=0}}class Ne extends c.WF{static get properties(){return{gegevens:{attribute:!1},bezig:{state:!0},fout:{state:!0},formulierNummer:{state:!0}}}static get styles(){return[...o.b]}get gevaarlijk(){return!1}voorbereiden(){}get modal(){return this.shadowRoot?.querySelector("vl-modal")}async open(e){this.terugFocus=e,this.fout=!1,this.voorbereiden(),this.formulierNummer++,await this.updateComplete,this.modal?.open()}close(){this.modal?.close()}render(){return c.qy`
            <vl-modal
                title=${this.titel}
                size="medium"
                closable
                not-cancellable
                not-auto-closable
                @vl-close=${this.gesloten}
            >
                ${(0,re.D)(this.formulierNummer,c.qy`
                        <form slot="content" class="vl-form vl-stacked vl-stacked-small" @submit=${this.verstuur}>
                            ${this.renderInhoud()}
                            ${this.fout?xe("De wijziging kon niet bewaard worden"):c.s6}
                        </form>
                    `)}
                <div slot="button" class="vl-group">
                    <vl-button ?error=${this.gevaarlijk} ?loading=${this.bezig} @vl-click=${this.bevestig}
                        >${this.knoptekst}</vl-button
                    >
                    <vl-button secondary @vl-click=${this.close}>Annuleren</vl-button>
                </div>
            </vl-modal>
        `}bevestig(){this.shadowRoot?.querySelector("form")?.requestSubmit()}async verstuur(e){e.preventDefault(),this.bezig=!0,this.fout=!1;try{await this.bewaar((0,N.Sl)(e.target));const t=!this.terugFocusNaWijziging;t&&(this.terugFocus=void 0),this.close(),this.dispatchEvent(new CustomEvent(Oe,{bubbles:!0,composed:!0,detail:{focusTijdlijn:t}}))}catch{this.fout=!0}finally{this.bezig=!1}}get terugFocusNaWijziging(){return!0}gesloten(){this.fout=!1,Ae(this.terugFocus)}constructor(){super(),this.bezig=!1,this.fout=!1,this.formulierNummer=0}}(0,n.gy)([ee.Y,ie.m]);const Ce=(e,t)=>e.map((({id:e,naam:i})=>({label:i,value:e,selected:e===t})));customElements.define("vizier-procedurestap-zetten",class extends Ne{get titel(){return"Procedurestap zetten"}get knoptekst(){return"Procedurestap zetten"}voorbereiden(){const e=Ee(this.gegevens?.fasen??[]);this.opties=Ce(e,e[0]?.id)}renderInhoud(){const e=(this.gegevens?.fasen??[]).find((e=>"ACTIEF"===e.toestand));return c.qy`
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
        `}async bewaar(e){var t,i;await(t=this.gegevens.algplanId,i=Se(e,"volgende"),K("POST",Z(t,"procedurestap"),{volgende:i}))}constructor(...e){super(...e),this.opties=[]}});customElements.define("vizier-procedurestap-herhalen",class extends Ne{openVoor(e,t){return this.gekozen=t?.id,this.open(e)}get titel(){return"Procedurestap herhalen"}get knoptekst(){return"Herhalen"}voorbereiden(){this.opties=Ce((this.gegevens?.fasen??[]).filter(Ie),this.gekozen)}renderInhoud(){return c.qy`
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
        `}async bewaar(e){var t,i,n,r;await(t=this.gegevens.algplanId,i=Se(e,"fase"),n=De(e,"toelichting"),r=((e=new Date)=>Y(new Date(Date.UTC(e.getFullYear(),e.getMonth(),e.getDate()))))(),K("POST",Z(t,"herhalingen"),{fase:i,toelichting:n,datum:r}))}constructor(...e){super(...e),this.opties=[]}});customElements.define("vizier-herhaling-verwijderen",class extends Ne{openVoor(e,t){return this.fase=t,this.open(e)}get titel(){return`${this.fase?.naam??"Herhaling"} verwijderen`}get knoptekst(){return"Verwijderen"}get gevaarlijk(){return!0}get terugFocusNaWijziging(){return!1}renderInhoud(){return c.qy`<p>De herhaalde procedurestap en haar activiteiten verdwijnen uit de tijdlijn.</p>`}async bewaar(){var e,t;await(e=this.gegevens.algplanId,t=this.fase.id,K("DELETE",Z(e,"fasen",t)))}});var Fe=i(3462);(0,n.gy)([x.Y,ee.Y,te.Al,ie.m,ne.M]);const Me=(e,t=[])=>e.map((({code:e,label:i})=>({label:i,value:e,selected:t.includes(e)}))),Be="https?://\\S+";class Le extends((0,N.hG)(ne.M)){}Le.formControlValidators=[...ne.M.formControlValidators,{key:"customError",message:"Kies een datum Tot na de datum Van.",dependencySelectors:["#van"],isValid:(e,t)=>{const i=e.form?.querySelector("#van")?.value;return!t||!i||t>i}}],customElements.define("vizier-tot-datum",Le);customElements.define("vizier-titel-aanpassen",class extends Pe{get titel(){return"Titel aanpassen"}renderVelden(){return c.qy`
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
        `}async bewaar(e){var t,i;await(t=this.gegevens.algplanId,i=Se(e,"titel").trim(),K("PUT",Z(t,"titel"),{titel:i}))}});customElements.define("vizier-status-wijzigen",class extends Pe{connectedCallback(){super.connectedCallback(),ae("/api/codelijsten/statussen").then((e=>this.statussen=e))}get titel(){return"Status wijzigen"}voorbereiden(){this.opties=Me(this.statussen,this.gegevens?.status?[this.gegevens.status.code]:[])}renderVelden(){return c.qy`
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
        `}async bewaar(e){var t,i;await(t=this.gegevens.algplanId,i=Se(e,"status"),K("PUT",Z(t,"status"),{status:i}))}constructor(...e){super(...e),this.statussen=[],this.opties=[]}});customElements.define("vizier-basisgegevens-wijzigen",class extends Pe{connectedCallback(){super.connectedCallback(),Promise.all([le(),se()]).then((([e,t])=>Object.assign(this,{themas:e,gemeenten:t})))}get titel(){return"Basisgegevens wijzigen"}voorbereiden(){this.themaOpties=Me(this.themas,this.gegevens?.thema?[this.gegevens.thema.code]:[]),this.gemeenteOpties=Me(this.gemeenten,(this.gegevens?.gemeenten??[]).map((e=>e.code)))}renderVelden(){const e=this.gegevens;return c.qy`
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
                    pattern=${Be}
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
                    pattern=${Be}
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
        `}async bewaar(e){var t,i;await(t=this.gegevens.algplanId,i={thema:Se(e,"thema"),documentlocatie:De(e,"documentlocatie"),projectwebsite:De(e,"projectwebsite"),gemeenten:Re(e,"gemeenten"),opmerkingen:De(e,"opmerkingen")},K("PUT",Z(t,"basisgegevens"),i))}constructor(...e){super(...e),this.themas=[],this.gemeenten=[],this.themaOpties=[],this.gemeenteOpties=[]}});customElements.define("vizier-persoon",class extends Pe{connectedCallback(){super.connectedCallback(),Promise.all([ae("/api/codelijsten/rollen"),ae("/api/medewerkers")]).then((([e,t])=>Object.assign(this,{rollen:e,medewerkers:t})))}openVoor(e,t){return this.teamlid=t,this.open(e)}get titel(){return this.teamlid?"Persoon wijzigen":"Persoon toevoegen"}voorbereiden(){this.rolOpties=Me(this.rollen,this.teamlid?[this.teamlid.rol.code]:[]),this.persoonOpties=Me(this.medewerkers,this.teamlid?[this.teamlid.persoon.code]:[])}renderVelden(){const e=this.teamlid;return c.qy`
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
        `}vulEmailIn(e){const t=this.medewerkers.find((({code:t})=>t===e.detail?.value)),i=this.shadowRoot?.querySelector("#email");t&&i&&(i.value=t.email)}async bewaar(e){const t={rol:Se(e,"rol"),persoon:Se(e,"persoon"),email:Se(e,"email").trim(),van:Se(e,"van"),tot:De(e,"tot")},i=this.gegevens.algplanId;await(this.teamlid?((e,t,i)=>K("PUT",Z(e,"team",t),i))(i,this.teamlid.id,t):((e,t)=>K("POST",Z(e,"team"),t))(i,t))}constructor(...e){super(...e),this.rollen=[],this.medewerkers=[],this.rolOpties=[],this.persoonOpties=[]}}),(0,n.gy)([h.I,k.T,b.Y,Fe.m,ne.M,x.Y,ee.Y]);const Ze={key:"customError",message:"Kies een einddatum na de startdatum.",dependencySelectors:["[data-startdatum]"],isValid:(e,t)=>{const i=e.getAttribute("startdatum"),n=i?e.form?.querySelector(`#${CSS.escape(i)}`)?.value:void 0;return!t||!n||t>=n}};class Ue extends((0,N.hG)(ne.M)){}Ue.formControlValidators=[...ne.M.formControlValidators,Ze],customElements.define("vizier-einddatum",Ue);customElements.define("vizier-fase-bewerken",class extends Pe{static get properties(){return{...super.properties,nieuwe:{state:!0},verwijderd:{state:!0}}}connectedCallback(){super.connectedCallback(),ae("/api/codelijsten/activiteittypes").then((e=>this.types=e))}openVoor(e,t){return this.fase=t,this.nieuwe=[],this.verwijderd=[],this.open(e)}get titel(){return`${this.fase?.naam??"Fase"} bewerken`}get definitief(){return"DEFINITIEVE_VASTSTELLING"===this.fase?.type.code}get activiteiten(){return qe(this.fase?.activiteiten??[]).filter((e=>"HERHAALD"!==e.type.code&&!this.verwijderd.includes(e.id)))}renderVelden(){return c.qy`
            ${this.definitief?this.renderTermijn():c.s6}
            <vl-title type="h3" no-space-bottom>Activiteiten</vl-title>
            <vl-text annotation>De volgorde in de tijdlijn volgt de datums.</vl-text>
            <div class="vl-stacked vl-stacked-medium">
                ${(0,je.u)(this.activiteiten,(e=>e.id),(e=>this.renderActiviteit(e)))}
                ${(0,je.u)(this.nieuwe,(e=>e.sleutel),(e=>this.renderNieuw(e)))}
                <div>
                    <vl-button id="activiteit-toevoegen" secondary icon="add" @vl-click=${this.voegToe}
                        >Activiteit toevoegen</vl-button
                    >
                </div>
            </div>
        `}get eindeOpenbaarOnderzoek(){return(this.gegevens?.fasen??[]).flatMap((e=>e.activiteiten)).filter((e=>"OPENBAAR_ONDERZOEK"===e.type.code&&e.einddatum)).map((e=>e.einddatum)).sort().pop()}renderTermijn(){const e=this.eindeOpenbaarOnderzoek,t=e?H(e,180):"";return c.qy`
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
                    >180 dagen na het einde van het openbaar onderzoek${e?` (${W(e)})`:""}.
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
        `}vulEinddatumIn(e,t){const i=t.currentTarget.value,n=this.shadowRoot?.querySelector(`#${CSS.escape(`${e}-einddatum`)}`);/^\d{4}-\d{2}-\d{2}$/.test(i)&&n&&!n.value&&(n.value=H(i,60))}async voegToe(){const e="nieuw-"+ ++this.teller;this.nieuwe=[...this.nieuwe,{sleutel:e,opties:Me(this.types)}],await this.updateComplete,Ae(this.shadowRoot?.querySelector(`#${e}-type`))}kiesType(e,t){e.type=this.types.find((({code:e})=>e===t.detail?.value)),this.nieuwe=[...this.nieuwe]}async verwijderNieuw(e){this.nieuwe=this.nieuwe.filter((t=>t!==e)),await this.updateComplete,Ae(this.shadowRoot?.querySelector("#activiteit-toevoegen"))}async verwijderBestaande(e){this.verwijderd=[...this.verwijderd,e.id],await this.updateComplete,Ae(this.shadowRoot?.querySelector("#activiteit-toevoegen"))}async bewaar(e){const t=this.activiteiten.map((t=>({id:t.id,datum:De(e,`${t.id}-datum`),einddatum:t.periode?De(e,`${t.id}-einddatum`):void 0,referentie:t.metReferentie?De(e,`${t.id}-referentie`):void 0}))),i=this.nieuwe.map((({sleutel:t})=>({type:Se(e,`${t}-type`),datum:De(e,`${t}-datum`)})));var n,r,a;await(n=this.gegevens.algplanId,r=this.fase.id,a={activiteiten:[...t,...i],...this.definitief?{termijnDefinitieveVaststelling:De(e,"termijnDefinitieveVaststelling")}:{}},K("PUT",Z(n,"fasen",r),a))}constructor(){super(),this.types=[],this.teller=0,this.nieuwe=[],this.verwijderd=[]}}),(0,n.gy)([S.a,h.I,b.Y,f.m,k.T,be.b,a.rC,w.L,D.n,q.L,ke.U,ye.F,we.ll,we.N8]);const Ke=["VERANTWOORDELIJKE_PLANNER","PLANNER","GIS_OPERATOR"],Ge=e=>{const t=Ke.indexOf(e.rol.code);return t<0?Ke.length:t},_e=()=>c.qy`<vl-text italic>Aan te vullen</vl-text>`;class Ye extends c.WF{static get properties(){return{procedureId:{type:String,attribute:"procedure-id"},kenmerken:{state:!0},kenmerkFout:{state:!0},opmerkingenOpen:{state:!0},opmerkingenTeLang:{state:!0}}}static get styles(){return[...o.b,ze._o]}connectedCallback(){super.connectedCallback(),ae("/api/codelijsten/kenmerken").then((e=>this.kenmerken=e))}get gegevens(){const e=this.procedure.value;return e?.id===this.procedureId?e.gegevens:void 0}get toestand(){return this.gegevens?"geladen":this.procedure.status===F.e1.ERROR?this.procedure.error instanceof L?"niet-gevonden":"fout":"laden"}willUpdate(e){e.has("procedureId")&&(this.opmerkingenOpen=!1)}updated(){const e=this.gegevens;document.title=e?`${e.titel} - VIZIER`:"Proceduregegevens - VIZIER",e!==this.getoond&&(this.getoond=e,this.meetOpmerkingen(),this.volgInhoudstafel())}async gewijzigd(e){await this.procedure.run(),e?.focusTijdlijn&&(await this.updateComplete,this.shadowRoot?.querySelector("#tijdlijn")?.focus())}render(){const e=this.gegevens;return c.qy`
            <vl-functional-header
                title-label="VIZIER"
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
        `}renderActies(e){const t=Ee(e.fasen).length>0,i=e.fasen.some(Ie);return c.qy`
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
                    ?disabled=${!i}
                    @vl-click=${e=>this.openHerhalen(e)}
                    >Procedurestap herhalen</vl-button
                >
                <vl-button
                    id="sharepoint-knop"
                    secondary
                    external
                    cta-link=${e.documentlocatie??c.s6}
                    ?disabled=${!e.documentlocatie}
                    >Open in SharePoint</vl-button
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
                                      @click=${$e.vK}
                                  ></vl-button>`:c.s6}
                        </div>
                        ${t?c.qy`<ul>
                                  ${(0,je.u)(e.fasen,(e=>e.id),(e=>c.qy`<li><vl-link href="#fase-${e.id}">${e.naam}</vl-link></li>`))}
                              </ul>`:c.s6}
                    </li>
                </ul>
            </vl-side-navigation-next>
        `}renderTitel(e){return c.qy`
            <div class="vl-group vl-group--space-between vl-group--align-start">
                <vl-title type="h1" id="main-content" no-space-bottom>${e.titel}</vl-title>
                <vl-button
                    ghost
                    icon="pencil"
                    label="Titel aanpassen"
                    aria-haspopup="dialog"
                    @vl-click=${e=>this.openZijpaneel("vizier-titel-aanpassen",e)}
                ></vl-button>
            </div>
        `}renderTegels(e){const t=e.fasen.find((e=>"ACTIEF"===e.toestand)),i=e.termijnDefinitieveVaststelling?((e,t=new Date)=>{const i=_(e,t),n=W(e);return i<0?{type:"error",tekst:`${n} (verstreken)`}:{type:i<=30?"warning":void 0,tekst:`${n} (${0===i?"vandaag":1===i?"nog 1 dag":`nog ${i} dagen`})`}})(e.termijnDefinitieveVaststelling):void 0,n=e.fasen.find((e=>"DEFINITIEVE_VASTSTELLING"===e.type.code));return c.qy`
            <div class="vl-grid">
                ${this.renderTegel("status","Status",e.status?c.qy`<vl-pill type=${r=e.status,("IN_UITVOERING"===r.code?"success":void 0)??c.s6}
                              >${e.status.label}</vl-pill
                          >`:_e(),"Status wijzigen",(e=>this.openZijpaneel("vizier-status-wijzigen",e)))}
                ${this.renderTegel("actieve-fase","Actieve fase",t?c.qy`<vl-pill>${t.naam}</vl-pill>`:_e(),`${t?.naam??"Actieve fase"} bewerken`,t?e=>this.openFase(e,t):void 0)}
                ${this.renderTegel("termijn","Termijn definitieve vaststelling",i?c.qy`<vl-pill type=${i.type??c.s6}>${i.tekst}</vl-pill>`:_e(),"Termijn definitieve vaststelling bewerken",n?e=>this.openFase(e,n):void 0)}
            </div>
        `;var r}renderTegel(e,t,i,n,r){return c.qy`
            <vl-info-tile
                id=${e}
                class="vl-column vl-column--4 vl-column--s-12 vl-column--align-self-stretch"
                full-height
                heading-level="2"
            >
                <span slot="title">${t}</span>
                <div slot="content" class="vl-group">
                    ${i}
                    ${r?c.qy`<vl-button
                              ghost
                              icon="pencil"
                              label=${n}
                              aria-haspopup="dialog"
                              @vl-click=${r}
                          ></vl-button>`:c.s6}
                </div>
            </vl-info-tile>
        `}renderBasisgegevens(e){const t=(e,t)=>c.qy`
            <vl-property>${e}</vl-property>
            <vl-property-data>${t||_e()}</vl-property-data>
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
                    <vl-properties no-padding-bottom custom-css=${"\n    .opmerkingen--beperkt {\n        display: -webkit-box;\n        -webkit-box-orient: vertical;\n        -webkit-line-clamp: 5;\n        overflow: hidden;\n    }\n"} @click=${this.leesMeer}>
                        ${t("Dossiertype",e.dossiertype.label)}
                        ${t("Algplanid",e.algplanId)} ${t("Thema",e.thema?.label)}
                        ${t("Documentlocatie",e.documentlocatie?c.qy`<vl-link external href=${e.documentlocatie}
                                      >Open documentlocatie</vl-link
                                  >`:void 0)}
                        ${t("Projectwebsite",e.projectwebsite?c.qy`<vl-link external href=${e.projectwebsite}
                                      >${e.projectwebsite}</vl-link
                                  >`:void 0)}
                        ${t("Betrokken gemeenten",e.gemeenten.map((({label:e})=>e)).join(", "))}
                        ${t("Opmerkingen",e.opmerkingen?this.renderOpmerkingen(e.opmerkingen):void 0)}
                    </vl-properties>
                </div>
            </vl-info-tile>
        `}renderOpmerkingen(e){return c.qy`
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
                                ${(0,je.u)((t=e.team,[...t].sort(((e,t)=>Ge(e)-Ge(t)||(t.van??"").localeCompare(e.van??"")))),(e=>e.id),(e=>c.qy`
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
                                            <td>${e.van?W(e.van):"—"}</td>
                                            <td>${e.tot?W(e.tot):"—"}</td>
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
        `}async wijzigKenmerk(e){const t=e.currentTarget,i=t.dataset.kenmerk,n=this.gegevens,r=e.detail.checked?[...n.kenmerken,i]:n.kenmerken.filter((e=>e!==i));this.kenmerkFout=!1;try{await((e,t)=>K("PUT",Z(e,"kenmerken"),{kenmerken:t}))(n.algplanId,r),this.procedure.run()}catch{t.checked=!e.detail.checked,this.kenmerkFout=!0}}renderTijdlijn(e){const t=e.fasen.filter((e=>"VOORBEREIDING"===e.type.code)),i=e.fasen.filter((e=>"VOORBEREIDING"!==e.type.code)),n=e=>(0,je.u)(e,(e=>e.id),(e=>(0,re.D)(`${e.toestand}-${e.activiteiten.length>0}-${e.nummer}`,this.renderFase(e))));return c.qy`
            <hr class="vl-separator-slash vl-margin--no" />
            <vl-title type="h2" id="tijdlijn" tabindex="-1" no-space-bottom>Tijdlijn procedure</vl-title>
            <vl-steps line>${n(i)}</vl-steps>
            <hr class="vl-separator-wave vl-margin--no" />
            <vl-steps line>${n(t)}</vl-steps>
        `}renderFase(e){const t="VOORBEREIDING"===e.type.code,i="NOG_TE_STARTEN"===e.toestand||"NOG_IN_TE_VULLEN"===e.toestand||t&&"AFGEROND"===e.toestand,n="ACTIEF"===e.toestand?"highlighted":i?"disabled":void 0,r=[Ie(e)?c.qy`<vl-button
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
                type=${n??c.s6}
                ?toggleable=${!t}
                ?default-open=${!t&&"ACTIEF"===e.toestand}
                heading-level="3"
            >
                <span slot="icon">${e.nummer}</span>
                <span slot="title">${e.naam}</span>
                <span slot="subtitle">${Te[e.toestand]}</span>
                ${r.length?c.qy`<div slot="content" class="vl-group">${r}</div>`:c.s6}
                ${qe(e.activiteiten).map((e=>{const t=(e=>{if(e.datum)return"VERSLAG_PLANTEAM"===e.type.code?"publication":"check-thin"})(e);return c.qy`<vl-duration-step slot="duration"
                        >${t?c.qy`<vl-icon icon=${t}></vl-icon> `:c.s6}<vl-text
                            ?bold=${"check-thin"===t}
                            >${(e=>{const t=e.datum?W(e.datum):void 0;if("HERHAALD"===e.type.code)return[e.naam,t,e.toelichting].filter(Boolean).join(" - ");if(!t)return e.naam;const i=e.periode&&e.einddatum?` tot ${W(e.einddatum)}`:"";return`${e.naam} - ${t}${i}`})(e)}</vl-text
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
        `}overlay(e){return this.shadowRoot.querySelector(e)}zijpaneelVoorbereiden(e){const t=this.overlay(e);return this.shadowRoot.querySelectorAll("vizier-titel-aanpassen, vizier-status-wijzigen, vizier-basisgegevens-wijzigen, vizier-persoon, vizier-fase-bewerken").forEach((e=>{e!==t&&e.isOpen&&e.close()})),t}openZijpaneel(e,t){this.zijpaneelVoorbereiden(e).open(t.currentTarget)}openPersoon(e,t){this.zijpaneelVoorbereiden("vizier-persoon").openVoor(e.currentTarget,t)}openFase(e,t){this.zijpaneelVoorbereiden("vizier-fase-bewerken").openVoor(e.currentTarget,t)}openZetten(e){this.overlay("vizier-procedurestap-zetten").open(e.currentTarget)}openHerhalen(e,t){this.overlay("vizier-procedurestap-herhalen").openVoor(e.currentTarget,t)}openVerwijderen(e,t){this.overlay("vizier-herhaling-verwijderen").openVoor(e.currentTarget,t)}constructor(){super(),this.procedure=new F.YZ(this,{task:async([e],{signal:t})=>({id:e,gegevens:await U(e,t)}),args:()=>[this.procedureId]}),this.kenmerken=[],this.kenmerkFout=!1,this.opmerkingenOpen=!1,this.opmerkingenTeLang=!1,this.addEventListener(Oe,(e=>this.gewijzigd(e.detail)))}}customElements.define("vizier-proceduregegevens",Ye);const He=c.AH`
    /* custom classes and styles go here */
`;(0,n.gy)([r.Z,l.Y,l.Q,a.rC]);class We extends c.WF{static get styles(){return[s.q,...o.b,He]}render(){return c.qy`
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
        `}constructor(...e){super(...e),this.bewaakt=async()=>{const e=await T();return!!V(e)||("niet-aangemeld"===e.status?window.location.assign(u(window.location.pathname)):(window.history.replaceState({},"",(0,v.e)("/")),await this.router.goto((0,v.e)("/"))),!1)},this.router=new d.Ix(this,[{path:(0,v.e)("/"),render:()=>c.qy`<vizier-landingspagina></vizier-landingspagina>`},{path:(0,v.e)("/overzicht"),render:()=>c.qy`<vizier-overzicht></vizier-overzicht>`,enter:this.bewaakt},{path:(0,v.e)("/proceduregegevens/:id"),render:({id:e})=>c.qy`<vizier-proceduregegevens procedure-id=${e}></vizier-proceduregegevens>`,enter:this.bewaakt}])}}customElements.define("vizier-app",We)}}]);