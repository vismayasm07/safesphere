/* ================= SafeSphere · #the_Safest_Map (vanilla, no build) ================= */
'use strict';

/* ---------- icons ---------- */
const IC = {
  home:'<path d="M3 10.5 12 3l9 7.5"/><path d="M5 9.5V21h14V9.5"/><path d="M9.5 21v-6h5v6"/>',
  compass:'<circle cx="12" cy="12" r="9"/><path d="m15.5 8.5-2 5-5 2 2-5 5-2z"/>',
  sos:'<path d="M12 2 5 5v6c0 4.5 3 7.9 7 9 4-1.1 7-4.5 7-9V5l-7-3z"/><path d="M12 8v4M12 16h.01"/>',
  users:'<path d="M17 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9.5" cy="7" r="4"/>',
  chart:'<path d="M3 3v18h18M7 15l3-4 3 3 5-7"/>',
  haven:'<path d="M3 10.5 12 3l9 7.5"/><path d="M5 9.5V21h14V9.5"/><path d="M9.5 13.5h5v3.5h-5z"/>',
  plug:'<path d="M9 2v6M15 2v6M7 8h10v3a5 5 0 0 1-10 0V8zM12 16v6"/>',
  bell:'<path d="M18 8a6 6 0 0 0-12 0c0 7-3 9-3 9h18s-3-2-3-9M13.7 21a2 2 0 0 1-3.4 0"/>',
  cog:'<circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.6 1.6 0 0 0 .3 1.8 2 2 0 1 1-2.8 2.8 1.6 1.6 0 0 0-2.7 1.1 2 2 0 0 1-4 0 1.6 1.6 0 0 0-2.7-1.1 2 2 0 1 1-2.8-2.8A1.6 1.6 0 0 0 4.6 15a2 2 0 0 1 0-4 1.6 1.6 0 0 0 1.1-2.7 2 2 0 1 1 2.8-2.8A1.6 1.6 0 0 0 11 4.6a2 2 0 0 1 4 0 1.6 1.6 0 0 0 2.7 1.1 2 2 0 1 1 2.8 2.8A1.6 1.6 0 0 0 19.4 11a2 2 0 0 1 0 4z"/>',
  route:'<circle cx="6" cy="19" r="2.2"/><circle cx="18" cy="5" r="2.2"/><path d="M8.2 19H15a3.3 3.3 0 0 0 0-6.6H9A3.3 3.3 0 0 1 9 5.8h6.6"/>',
  shield:'<path d="M12 2 5 5v6c0 4.5 3 7.9 7 9 4-1.1 7-4.5 7-9V5l-7-3zM9.5 12l1.8 1.8L15 9.8"/>',
  clock:'<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
  warn:'<path d="M10.3 3.9 1.8 18a2 2 0 0 0 1.7 3h16.9a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0zM12 9v4M12 17h.01"/>',
  activity:'<path d="M22 12h-4l-3 9L9 3l-3 9H2"/>',
  bolt:'<path d="M13 2 4 14h7l-1 8 10-12h-7l0-8z"/>',
  check:'<path d="M20 6 9 17l-5-5"/>',
  eye:'<path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7z"/><circle cx="12" cy="12" r="3"/>',
  bulb:'<path d="M9 18h6M10 21h4M12 3a6 6 0 0 0-4 10.5c.8.8 1 1.3 1 2.5h6c0-1.2.2-1.7 1-2.5A6 6 0 0 0 12 3z"/>',
  cam:'<path d="M23 7l-7 5 7 5V7z"/><rect x="1" y="5" width="15" height="14" rx="2"/>',
  store:'<path d="M3 9l1.5-5h15L21 9M4 9v11h16V9M4 9h16"/><path d="M9 20v-5h6v5"/>',
  phone:'<path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3-8.6A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.5c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2z"/>',
  pin:'<path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z"/><circle cx="12" cy="10" r="2.6"/>',
  nav:'<path d="M3 11 22 2l-9 19-2-8-8-2z"/>',
  copy:'<rect x="9" y="9" width="12" height="12" rx="2"/><path d="M5 15V5a2 2 0 0 1 2-2h10"/>',
  key:'<circle cx="7.5" cy="15.5" r="4.5"/><path d="m10.5 12.5 8-8M17 4l3 3M14.5 6.5l3 3"/>',
  globe:'<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c2.5 2.7 2.5 15.3 0 18M12 3c-2.5 2.7-2.5 15.3 0 18"/>',
  building:'<rect x="4" y="3" width="16" height="18" rx="1.5"/><path d="M9 8h.01M15 8h.01M9 12h.01M15 12h.01M9 16h.01M15 16h.01"/>',
  heart:'<path d="M20.8 5.6a5.5 5.5 0 0 0-7.8 0L12 6.6l-1-1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 22l7.8-7.6 1-1a5.5 5.5 0 0 0 0-7.8z"/>',
  megaphone:'<path d="M3 11v2a1 1 0 0 0 1 1h2l5 4V6L6 10H4a1 1 0 0 0-1 1z"/><path d="M15 8a4 4 0 0 1 0 8"/>',
  lock:'<rect x="4" y="10" width="16" height="11" rx="2"/><path d="M8 10V7a4 4 0 0 1 8 0v3"/>',
  moon:'<path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z"/>',
  send:'<path d="M22 2 11 13M22 2l-7 20-4-9-9-4 20-7z"/>',
  arrow:'<path d="M5 12h14M13 6l6 6-6 6"/>',
  play:'<path d="M7 5v14l11-7z"/>',
  layers:'<path d="M12 2 2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>',
  cap:'<path d="M12 3 2 8l10 5 10-5-10-5zM6 10.5V16c0 1.9 2.7 3 6 3s6-1.1 6-3v-5.5"/>',
  star:'<path d="M12 2l2.9 6.3 6.9.8-5.1 4.7 1.4 6.8L12 17.8 5.9 20.6l1.4-6.8L2.2 9.1l6.9-.8L12 2z"/>',
  back:'<path d="M19 12H5M11 6l-6 6 6 6"/>',
};
const svg = (p,w=20) => `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" style="width:${w}px;height:${w}px">${p}</svg>`;

function toast(msg){
  const t=document.getElementById('toast');
  t.innerHTML=svg(IC.shield,18)+`<span>${msg}</span>`;
  t.classList.add('show'); clearTimeout(window.__tt); window.__tt=setTimeout(()=>t.classList.remove('show'),2600);
}

/* ---------- navigation ---------- */
const VIEWS = [
  {id:'overview', title:'Overview',           icon:'home',    sub:'Product vision & live status'},
  {id:'nav',      title:'Safe Navigation',    icon:'compass', sub:'DSI routing · the safest way'},
  {id:'sos',      title:'SOS & Guardian',     icon:'sos',     sub:'Emergency + active monitoring', badge:'live'},
  {id:'community',title:'Community Reports',  icon:'users',   sub:'Collective intelligence'},
  {id:'city',     title:'City Analytics',     icon:'chart',   sub:'Data for change'},
  {id:'havens',   title:'Safe Havens',        icon:'haven',   sub:'Guardian nodes · green badge'},
  {id:'api',      title:'Safety API',         icon:'plug',    sub:'B2B integration'},
];
let CURRENT='overview';

function buildNav(){
  document.getElementById('nav').innerHTML =
    '<button class="nav-item" id="homeNav"><span class="nav-ico">'+svg(IC.back,18)+'</span><span class="nav-txt"><span class="nav-title">Home</span><span class="nav-desc">Back to landing page</span></span></button>' +
    '<span class="nav-label">Platform</span>' + VIEWS.map(v=>`
    <button class="nav-item${v.id===CURRENT?' active':''}" data-view="${v.id}">
      <span class="nav-ico">${svg(IC[v.icon],18)}</span>
      <span class="nav-txt"><span class="nav-title">${v.title}</span><span class="nav-desc">${v.sub}</span></span>
      ${v.badge?`<span class="badge">${v.badge}</span>`:''}
    </button>`).join('') +
    '<span class="nav-label">Account</span>' +
    [['Notifications','bell'],['Settings','cog']].map(([l,ic])=>`<button class="nav-item"><span class="nav-ico">${svg(IC[ic],18)}</span><span class="nav-txt"><span class="nav-title">${l}</span></span></button>`).join('');
  document.getElementById('viewTabs').innerHTML = VIEWS.map(v=>`<button class="view-tab${v.id===CURRENT?' active':''}" data-view="${v.id}">${v.title}</button>`).join('');
  document.querySelectorAll('[data-view]').forEach(b=>b.addEventListener('click',()=>setView(b.dataset.view)));
}
function setView(id){
  const v=VIEWS.find(x=>x.id===id); if(!v)return; CURRENT=id;
  document.querySelectorAll('.nav-item[data-view]').forEach(b=>b.classList.toggle('active',b.dataset.view===id));
  document.querySelectorAll('.view-tab').forEach(b=>b.classList.toggle('active',b.dataset.view===id));
  document.getElementById('pageTitle').innerHTML=svg(IC[v.icon],20)+v.title;
  document.getElementById('pageSub').textContent=v.sub;
  document.getElementById('content').innerHTML=`<section class="view active">${RENDER[id]()}</section>`;
  if(POST[id]) POST[id]();
  document.getElementById('content').scrollTop=0;
}

/* ---------- chart primitives ---------- */
function lineChart(data,{w=560,h=180,color='#188a5a',fill='rgba(24,138,90,.13)'}={}){
  const max=Math.max(...data)*1.08,min=Math.min(...data)*0.9;
  const X=i=>(i/(data.length-1))*w,Y=v=>h-12-((v-min)/(max-min||1))*(h-28);
  let d=`M${X(0)} ${Y(data[0])}`;
  for(let i=1;i<data.length;i++){const cx=(X(i-1)+X(i))/2;d+=` C${cx} ${Y(data[i-1])} ${cx} ${Y(data[i])} ${X(i)} ${Y(data[i])}`;}
  let g='';for(let k=0;k<4;k++){const y=12+k*((h-28)/3);g+=`<line x1="0" y1="${y}" x2="${w}" y2="${y}" stroke="#eef4ef"/>`;}
  return `<svg viewBox="0 0 ${w} ${h}" width="100%" height="${h}" preserveAspectRatio="none">${g}<path d="${d} L${w} ${h} L0 ${h} Z" fill="${fill}"/><path d="${d}" fill="none" stroke="${color}" stroke-width="2.6" stroke-linecap="round"/><circle cx="${X(data.length-1)}" cy="${Y(data[data.length-1])}" r="4.5" fill="${color}" stroke="#fff" stroke-width="2"/></svg>`;
}
function bars(data,{w=460,h=180,color='#f4643f'}={}){
  const max=Math.max(...data)*1.15,bw=w/data.length;let r='';
  data.forEach((v,i)=>{const bh=(v/max)*(h-16);r+=`<rect x="${i*bw+bw*.22}" y="${h-bh}" width="${bw*.56}" height="${bh}" rx="5" fill="${color}" opacity="${(.4+.6*v/max).toFixed(2)}"/>`;});
  return `<svg viewBox="0 0 ${w} ${h}" width="100%" height="${h}" preserveAspectRatio="none">${r}</svg>`;
}
function donut(segs,size=150){
  const total=segs.reduce((a,s)=>a+s.v,0);let acc=0;const r=size/2,ir=r*.6,cx=r,cy=r;let p='';
  segs.forEach(s=>{const a0=(acc/total)*2*Math.PI-Math.PI/2;acc+=s.v;const a1=(acc/total)*2*Math.PI-Math.PI/2;
    const x0=cx+r*Math.cos(a0),y0=cy+r*Math.sin(a0),x1=cx+r*Math.cos(a1),y1=cy+r*Math.sin(a1);
    const ix1=cx+ir*Math.cos(a1),iy1=cy+ir*Math.sin(a1),ix0=cx+ir*Math.cos(a0),iy0=cy+ir*Math.sin(a0);
    const lg=(a1-a0)>Math.PI?1:0;
    p+=`<path d="M${x0} ${y0} A${r} ${r} 0 ${lg} 1 ${x1} ${y1} L${ix1} ${iy1} A${ir} ${ir} 0 ${lg} 0 ${ix0} ${iy0} Z" fill="${s.c}"/>`;});
  return `<svg width="${size}" height="${size}" viewBox="0 0 ${size} ${size}">${p}</svg>`;
}
function gauge(value,{size=150,color='#188a5a'}={}){
  const r=size/2-14,cx=size/2,cy=size/2,C=Math.PI*r,off=C*(1-value/100);
  const p=`M14 ${cy} A${r} ${r} 0 0 1 ${size-14} ${cy}`;
  return `<svg width="${size}" height="${size/2+16}" viewBox="0 0 ${size} ${size/2+16}"><path d="${p}" fill="none" stroke="#e9f1ea" stroke-width="14" stroke-linecap="round"/><path d="${p}" fill="none" stroke="${color}" stroke-width="14" stroke-linecap="round" stroke-dasharray="${C}" stroke-dashoffset="${off}"/></svg>`;
}
function spark(data,color,w=118,h=36){
  const max=Math.max(...data),min=Math.min(...data);
  const X=i=>(i/(data.length-1))*w,Y=v=>h-4-((v-min)/(max-min||1))*(h-9);
  let d=`M${X(0)} ${Y(data[0])}`;for(let i=1;i<data.length;i++)d+=` L${X(i)} ${Y(data[i])}`;
  return `<svg width="${w}" height="${h}" viewBox="0 0 ${w} ${h}" preserveAspectRatio="none"><path d="${d}" fill="none" stroke="${color}" stroke-width="2.2" stroke-linecap="round"/></svg>`;
}
function kpiCard(o){
  return `<div class="card kpi hoverable"><div class="kpi-top"><div class="kpi-ico tint-${o.tint}">${svg(IC[o.icon],20)}</div>${o.spark?spark(o.spark,o.sparkColor):''}</div><div class="kpi-label">${o.label}</div><div class="kpi-val">${o.value} <small class="${o.up===false?'down':'up'}">${o.delta}</small></div></div>`;
}
const TONE={green:'#188a5a',coral:'#f4643f',yellow:'#eab308',sky:'#2f80d6',rose:'#e5484d'};

/* ================= VIEW: OVERVIEW (operational home) ================= */
function vOverview(){
  const h=new Date().getHours();
  const greet=h<12?'Good morning':h<17?'Good afternoon':h<21?'Good evening':'Working late';
  const ph=phaseOf(h), night=(h>=19||h<6);
  const areaDSI=scoreFor(96,h);
  const tiles=[
    ['compass','green','Safe Navigation','Plan a DSI-aware safest route','nav'],
    ['sos','coral','SOS & Guardian','Emergency + active monitoring','sos'],
    ['users','sky','Community Reports','Add or view live safety reports','community'],
    ['chart','yellow','City Analytics','Safety index & data for change','city'],
  ];
  const acts=[
    ['warn','coral','Low-safety zone flagged','Paharganj underpass · rerouting active','2m'],
    ['bulb','yellow','Streetlight reported out','Rajpath · confirmed by 3 people','8m'],
    ['haven','green','New Safe Haven certified','Apollo 24/7 Pharmacy · CP','15m'],
    ['eye','sky','Active monitoring check','Hauz Khas walk · you marked "okay"','22m'],
    ['shield','green','Journey completed safely','India Gate → Connaught Place · score 96','31m'],
  ];
  const havens=[['Apollo 24/7 Pharmacy','120 m · open 24/7'],['24Seven Store','240 m · open now'],['Chaayos Café','300 m · till 11pm']];
  return `
  <div class="card hoverable">
    <div class="welcome">
      <div class="wl-l">
        <h2>${greet}, Vismaya 👋</h2>
        <div class="sub">
          <span class="pill pill-${night?'yellow':'green'}"><span class="d" style="background:${night?'var(--yellow-2)':'var(--green)'}"></span>${night?'Stay on lit corridors':"You're in a safe zone"}</span>
          <span>Current area DSI <b style="color:var(--green-2)">${areaDSI}/100</b></span>
          <span style="color:var(--muted-2)">·</span>
          <span>${ph[0]} · guardians &amp; havens nearby</span>
        </div>
      </div>
      <div class="wl-actions">
        <button class="go-btn" data-goto="nav">${svg(IC.nav,16)}Plan safe route</button>
        <button class="go-btn" style="background:#fff;color:var(--ink-2);border:1px solid var(--stroke);box-shadow:var(--sh-soft)" data-goto="community">${svg(IC.megaphone,16)}Report a spot</button>
        <button class="go-btn" style="background:linear-gradient(135deg,var(--coral),var(--coral-2));box-shadow:var(--sh-coral)" data-goto="sos">${svg(IC.sos,16)}SOS</button>
      </div>
    </div>
  </div>

  <div class="grid g4 mt">
    ${kpiCard({icon:'route',tint:'green',label:'Streets Scored (DSI)',value:'48,210',delta:'+1.2k',spark:[30,32,34,33,38,40,42,45,47,48],sparkColor:'#188a5a'})}
    ${kpiCard({icon:'users',tint:'coral',label:'Community Reports',value:'126k',delta:'+3.4%',spark:[70,74,78,80,86,90,96,104,116,126],sparkColor:'#f4643f'})}
    ${kpiCard({icon:'haven',tint:'yellow',label:'Safe Havens',value:'1,340',delta:'+28',spark:[10,12,14,16,18,20,23,25,27,28],sparkColor:'#eab308'})}
    ${kpiCard({icon:'clock',tint:'sky',label:'Avg SOS Response',value:'1m 38s',delta:'-16s',spark:[130,124,120,116,112,108,104,100,98,98],sparkColor:'#2f80d6'})}
  </div>

  <div class="grid g12 mt">
    <div class="col-8">
      <div class="card pad hoverable">
        <div class="sec-head"><div><div class="sec-title">Citywide Safety Index</div><div class="sec-sub">Live DSI · rolling 12-week trend</div></div><span class="pill pill-green">${svg(IC.activity,13)}86.2 · +3.4</span></div>
        ${lineChart([66,68,67,71,70,74,76,75,80,82,84,86])}
        <div class="chart-x mono"><span>W1</span><span>W3</span><span>W5</span><span>W7</span><span>W9</span><span>W11</span><span>Now</span></div>
      </div>
      <div class="card pad mt hoverable">
        <div class="sec-head"><div><div class="sec-title">Jump back in</div><div class="sec-sub">Your most-used dashboards</div></div></div>
        <div class="qtiles">
          ${tiles.map(t=>`<div class="qtile" data-goto="${t[4]}"><span class="qi tint-${t[1]}">${svg(IC[t[0]],21)}</span><div><h4>${t[2]}</h4><p>${t[3]}</p></div><span class="qa">${svg(IC.arrow,16)}</span></div>`).join('')}
        </div>
      </div>
    </div>
    <div class="col-4">
      <div class="card pad hoverable">
        <div class="sec-head"><div><div class="sec-title">Live Activity</div><div class="sec-sub">Across your city, right now</div></div><span class="pill pill-green"><span class="d" style="background:var(--green)"></span>Live</span></div>
        ${acts.map(a=>`<div class="act"><span class="ai tint-${a[1]}">${svg(IC[a[0]],16)}</span><div style="flex:1"><div class="at">${a[2]}</div><div class="am">${a[3]}</div></div><span class="atm">${a[4]}</span></div>`).join('')}
      </div>
      <div class="card pad mt hoverable">
        <div class="sec-head"><div><div class="sec-title">Nearest Safe Havens</div><div class="sec-sub">Guardian Nodes near you</div></div><button class="pill pill-slate" style="border:none;cursor:pointer" data-goto="havens">View all</button></div>
        ${havens.map(hv=>`<div class="contact"><span class="cav" style="background:var(--green-50);color:var(--green);position:relative">${svg(IC.store,16)}<span class="hbadge">${svg(IC.check,10)}</span></span><div><div class="cn">${hv[0]}</div><div class="cr">${hv[1]}</div></div><button class="cbtn" data-goto="havens">${svg(IC.nav,15)}</button></div>`).join('')}
      </div>
    </div>
  </div>`;
}
function postOverview(){ document.querySelectorAll('[data-goto]').forEach(b=>b.addEventListener('click',()=>setView(b.dataset.goto))); }

/* ================= VIEW: SAFE NAVIGATION ================= */
const ROUTES=[
  {name:'Safest route',base:98,time:'32 min',meta:'Fully lit · 6 guardians · CCTV',tone:'green',path:[[28.6129,77.2295],[28.6142,77.2252],[28.6158,77.2212],[28.6205,77.2192],[28.6262,77.2178],[28.6315,77.2167]]},
  {name:'Balanced',base:88,time:'27 min',meta:'Mostly lit · 3 guardians',tone:'sky',path:[[28.6129,77.2295],[28.6162,77.2242],[28.6216,77.2206],[28.6282,77.2181],[28.6315,77.2167]]},
  {name:'Fastest',base:71,time:'23 min',meta:'2 dim stretches · 1 guardian',tone:'yellow',path:[[28.6129,77.2295],[28.6182,77.2232],[28.6252,77.2192],[28.6315,77.2167]]},
];
let SELECTED=0, HOUR=21, MAP=null, ROUTE_LAYER=null, LAYER_STATE={infra:true,official:false,community:true}, CTX_LAYERS={};
let FROM_LABEL='India Gate', TO_LABEL='Connaught Place';
const CITIES=[
  {name:'New Delhi',c:[28.6280,77.2166],from:'Connaught Place, New Delhi',to:'Jantar Mantar, New Delhi'},
  {name:'Mumbai',c:[18.9210,72.8310],from:'Gateway of India, Mumbai',to:'Colaba Causeway, Mumbai'},
  {name:'Bengaluru',c:[12.9750,77.6070],from:'MG Road, Bengaluru',to:'Brigade Road, Bengaluru'},
  {name:'Hyderabad',c:[17.3600,78.4720],from:'Charminar, Hyderabad',to:'Chowmahalla Palace, Hyderabad'},
  {name:'Chennai',c:[13.0600,80.2780],from:'Marina Beach, Chennai',to:'Chepauk, Chennai'},
  {name:'Kolkata',c:[22.5520,88.3500],from:'Park Street, Kolkata',to:'Maidan, Kolkata'},
  {name:'Pune',c:[18.5200,73.8420],from:'FC Road, Pune',to:'Jangli Maharaj Road, Pune'},
  {name:'Jaipur',c:[26.9240,75.8260],from:'Hawa Mahal, Jaipur',to:'City Palace, Jaipur'},
  {name:'Ahmedabad',c:[23.0250,72.5850],from:'Manek Chowk, Ahmedabad',to:'Jama Masjid, Ahmedabad'},
  {name:'Kochi',c:[9.9650,76.2430],from:'Fort Kochi Beach, Kochi',to:'Santa Cruz Basilica, Kochi'},
];
let CITY=CITIES[0];
let USER_LOC=null;
async function resolvePlace(q){
  if(q&&q.trim().toLowerCase()==='my location'&&USER_LOC) return {lat:USER_LOC.lat,lng:USER_LOC.lng,name:'My location'};
  return geocode(q);
}
function phaseOf(h){ if(h>=6&&h<11)return['Morning','#f7c948']; if(h>=11&&h<16)return['Midday','#188a5a']; if(h>=16&&h<19)return['Evening','#2f80d6']; if(h>=19&&h<23)return['Night','#f4643f']; return['Late night','#123227']; }
function dsiFactor(h){ if(h>=7&&h<17)return 1.0; if(h>=17&&h<20)return .93; if(h>=20&&h<23)return .8; return .66; }
function scoreFor(base,h){ return Math.max(20,Math.round(base*dsiFactor(h))); }

/* ---------- LIVE DATA ENGINE (Nominatim + OSRM + Overpass/OSM) ---------- */
let LIVE={active:false,routes:[],pois:null};
function curRoutes(){ return LIVE.active?LIVE.routes:ROUTES; }
function dsiScore(r){ return r&&r.live ? Math.max(20,Math.round(r.live.raw*dsiFactor(HOUR))) : scoreFor(r.base,HOUR); }
function hav(a,b){const R=6371000,dLat=(b[0]-a[0])*Math.PI/180,dLng=(b[1]-a[1])*Math.PI/180,la1=a[0]*Math.PI/180,la2=b[0]*Math.PI/180;const x=Math.sin(dLat/2)**2+Math.cos(la1)*Math.cos(la2)*Math.sin(dLng/2)**2;return 2*R*Math.asin(Math.sqrt(x));}
function routeKm(c){let d=0;for(let i=1;i<c.length;i++)d+=hav(c[i-1],c[i]);return d/1000;}
async function geocode(q){
  let u='https://nominatim.openstreetmap.org/search?format=json&limit=1&countrycodes=in';
  if(CITY&&CITY.c){const la=CITY.c[0],ln=CITY.c[1],d=0.28;u+=`&viewbox=${ln-d},${la+d},${ln+d},${la-d}`;}
  u+='&q='+encodeURIComponent(q);
  const r=await fetch(u,{headers:{'Accept':'application/json'}}); const j=await r.json();
  if(!j||!j.length) throw new Error('Place not found: '+q);
  return {lat:+j[0].lat,lng:+j[0].lon,name:(j[0].display_name||q).split(',')[0]};
}
async function osrmRoutes(a,b){
  const u=`https://router.project-osrm.org/route/v1/foot/${a.lng},${a.lat};${b.lng},${b.lat}?alternatives=3&overview=full&geometries=geojson`;
  const r=await fetch(u); const j=await r.json();
  if(j.code!=='Ok'||!j.routes||!j.routes.length) throw new Error('No route');
  return j.routes.map(rt=>({coords:rt.geometry.coordinates.map(c=>[c[1],c[0]]),dist:rt.distance,dur:rt.duration}));
}
const OVERPASS_EPS=['https://overpass-api.de/api/interpreter','https://overpass.kumi.systems/api/interpreter','https://overpass.openstreetmap.fr/api/interpreter'];
async function overpassFetch(q){
  let lastErr;
  for(const ep of OVERPASS_EPS){
    try{
      const r=await fetch(ep+'?data='+encodeURIComponent(q));
      if(!r.ok){lastErr=new Error('HTTP '+r.status);continue;}
      return await r.json();
    }catch(e){lastErr=e;}
  }
  throw lastErr||new Error('Overpass unavailable');
}
async function overpassPOIs(bbox){
  const b=bbox.join(',');
  const q=`[out:json][timeout:25];(node[highway=street_lamp](${b});node[man_made=surveillance](${b});node[amenity=pharmacy](${b});node[amenity=police](${b});node[amenity=hospital](${b});node[shop=convenience](${b});node["opening_hours"="24/7"](${b}););out body 900;`;
  const j=await overpassFetch(q);
  const cat=t=>{ if(t.highway==='street_lamp')return'lamp'; if(t.man_made==='surveillance')return'cctv'; if(t.amenity==='police')return'police'; if(t.amenity==='pharmacy'||t.amenity==='hospital'||t.shop==='convenience'||(t.opening_hours&&/24\/7/.test(t.opening_hours)))return'haven'; return'other'; };
  return (j.elements||[]).filter(e=>e.lat&&e.lon).map(e=>({lat:e.lat,lng:e.lon,cat:cat(e.tags||{}),name:(e.tags&&e.tags.name)||''}));
}
function scoreLive(coords,pois){
  const step=Math.max(1,Math.floor(coords.length/60));
  const samp=coords.filter((_,i)=>i%step===0);
  const km=routeKm(coords), denom=Math.max(.3,km);
  const near=(c,thr)=>{let n=0;for(const p of pois){if(p.cat!==c)continue;for(const s of samp){if(hav([p.lat,p.lng],s)<thr){n++;break;}}}return n;};
  const lamps=near('lamp',35),cctv=near('cctv',60),havens=near('haven',160),police=near('police',280);
  let raw=44+Math.min(30,(lamps/denom)*3)+Math.min(12,(cctv/denom)*4)+Math.min(10,(havens/denom)*3)+Math.min(6,police*3);
  raw=Math.min(99,Math.round(raw));
  return {raw,lamps,cctv,havens,police,km};
}
async function cityStats(city){
  const la=city.c[0],ln=city.c[1],d=0.02;
  const pois=await overpassPOIs([la-d,ln-d,la+d,ln+d]);
  const cnt=c=>pois.filter(p=>p.cat===c).length;
  const lamps=cnt('lamp'),cctv=cnt('cctv'),police=cnt('police'),havens=cnt('haven');
  const idx=Math.min(96,Math.round(52+Math.min(24,lamps*0.6)+Math.min(12,cctv*0.25)+Math.min(8,police*2)+Math.min(8,havens*0.4)));
  return {lamps,cctv,police,havens,total:pois.length,idx};
}
function setNavStatus(msg,kind){
  const el=document.getElementById('navStatus'); if(!el)return;
  const c=kind==='ok'?'var(--green)':kind==='err'?'var(--coral)':kind==='load'?'var(--sky)':'var(--muted-2)';
  el.innerHTML=`<span style="width:8px;height:8px;border-radius:50%;background:${c};${kind==='load'?'animation:sospulse 1.2s infinite':''}"></span><span>${msg}</span>`;
}
async function runLive(){
  const from=(document.getElementById('fromInput')||{}).value, to=(document.getElementById('toInput')||{}).value;
  if(!from||!to){toast('Enter a start and destination');return;}
  const btn=document.getElementById('goBtn'); if(btn)btn.disabled=true;
  setNavStatus('Searching places (Nominatim)…','load');
  try{
    const [A,B]=await Promise.all([resolvePlace(from),resolvePlace(to)]);
    FROM_LABEL=A.name; TO_LABEL=B.name;
    setNavStatus('Finding safe routes (OSRM)…','load');
    const routes=await osrmRoutes(A,B);
    const all=routes.flatMap(r=>r.coords), lats=all.map(c=>c[0]), lngs=all.map(c=>c[1]), pad=0.003;
    const bbox=[Math.min(...lats)-pad,Math.min(...lngs)-pad,Math.max(...lats)+pad,Math.max(...lngs)+pad];
    setNavStatus('Loading live safety data (OpenStreetMap)…','load');
    let pois=[]; try{ pois=await overpassPOIs(bbox); }catch(e){ pois=[]; }
    const scored=routes.map(r=>({...r,m:scoreLive(r.coords,pois)}));
    // Prefer sub-2km walks first, then the safest (best-lit / most-watched) streets
    scored.sort((a,b)=>{
      const au=a.m.km<=2.0?0:1, bu=b.m.km<=2.0?0:1;
      if(au!==bu)return au-bu;
      return b.m.raw-a.m.raw;
    });
    const N=scored.length;
    LIVE.routes=scored.slice(0,3).map((r,i)=>({
      name:i===0?'Safest route':(i===Math.min(N,3)-1?'Fastest':'Balanced'),
      live:r.m, path:r.coords, time:Math.round(r.dur/60)+' min',
      meta:`${r.m.km.toFixed(1)} km · ${r.m.lamps} lamps · ${r.m.havens} havens`
    }));
    LIVE.pois=pois; LIVE.active=true; SELECTED=0;
    renderRoutes(); updateScore(); applyCtxLayers(); drawRoute();
    const top=scored[0].m;
    if(top.km>2.0){
      setNavStatus(`Safest route ${top.km.toFixed(1)} km · over the 2 km comfort limit — pick a closer destination for a short safe walk`,'err');
    }else{
      setNavStatus(`Safe walk · ${top.km.toFixed(1)} km · ${top.lamps} lamps · ${top.cctv} CCTV · ${pois.length} OSM safety points`,'ok');
    }
    toast('Live safest route loaded — under 2 km on well-lit streets');
  }catch(e){
    console.error(e); LIVE.active=false;
    setNavStatus('Live data unavailable — showing sample routes ('+(e.message||'error')+')','err');
    renderRoutes(); updateScore(); applyCtxLayers(); drawRoute();
    toast('Could not load live data — using sample');
  }finally{ if(btn)btn.disabled=false; }
}

function vNav(){
  const ph=phaseOf(HOUR);
  return `
  <div class="grid g12">
    <div class="col-8">
      <div class="card map-card hoverable">
        <div class="route-bar">
          <select id="citySel" class="city-sel" title="Pick a city in India">${CITIES.map((c,i)=>`<option value="${i}"${i===CITIES.indexOf(CITY)?' selected':''}>${c.name}</option>`).join('')}</select>
          <div class="field"><span class="d" style="background:var(--green)"></span><input id="fromInput" value="${CITY.from}" placeholder="Start…" /></div>
          ${svg(IC.route,18)}
          <div class="field"><span class="d" style="background:var(--coral)"></span><input id="toInput" value="${CITY.to}" placeholder="Destination…" /></div>
          <button class="loc-btn" id="geoBtn" title="Use my location">${svg(IC.pin,16)}</button>
          <button class="go-btn" id="goBtn">${svg(IC.nav,16)}Go live</button>
        </div>
        <div id="navStatus" class="nav-status"><span style="width:8px;height:8px;border-radius:50%;background:var(--muted-2)"></span><span>Sample route shown · press <b>Go live</b> for real OpenStreetMap routing &amp; safety data</span></div>
        <div id="map"></div>
        <div class="map-legend">
          <span><i style="background:#188a5a"></i>Safe</span>
          <span><i style="background:#f7c948"></i>Caution</span>
          <span><i style="background:#e5484d"></i>Risk</span>
          <span><i style="background:#8b5cf6"></i>Guardian</span>
          <span><i style="background:#2f80d6"></i>Safe Haven</span>
        </div>
      </div>
      <div class="card pad mt hoverable">
        <div class="sec-head"><div><div class="sec-title">Dynamic Safety Index · time of day</div><div class="sec-sub">Drag to see how each route's score shifts — the DSI is never static</div></div><span class="pill pill-${HOUR>=19||HOUR<6?'coral':'green'}" id="phasePill"><span class="d" style="background:${ph[1]}"></span>${ph[0]}</span></div>
        <div class="dsi-time">
          <span class="dsi-clock" id="dsiClock">${String(HOUR).padStart(2,'0')}:00</span>
          <input type="range" min="0" max="23" value="${HOUR}" id="dsiRange"/>
        </div>
        <div class="dsi-phase" style="margin-top:8px" id="dsiHint">At night, deserted & poorly-lit streets automatically drop in score, rerouting you toward lit, busy corridors.</div>
      </div>
    </div>
    <div class="col-4">
      <div class="card pad hoverable" style="position:relative;overflow:hidden">
        <div class="sec-head"><div><div class="sec-title">Journey Safety Score</div><div class="sec-sub" id="scoreSub">Live DSI · ${ph[0].toLowerCase()}</div></div></div>
        <div class="score-row">
          <div style="position:relative">
            <div id="gauge"></div>
            <div style="position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;justify-content:flex-end;padding-bottom:2px">
              <span style="font-size:30px;font-weight:900" id="scoreNum">98</span>
              <span style="font-size:11px;color:var(--muted-2);font-weight:600" id="scoreLbl">/100 · Very Safe</span>
            </div>
          </div>
          <div class="score-badges" id="scoreBadges">
            <div class="b"><span class="bi tint-yellow">${svg(IC.bulb,14)}</span>Well-lit streets</div>
            <div class="b"><span class="bi tint-coral">${svg(IC.users,14)}</span>6 guardians nearby</div>
            <div class="b"><span class="bi tint-green">${svg(IC.activity,14)}</span>High foot traffic</div>
          </div>
        </div>
      </div>
      <div class="card pad mt">
        <div class="sec-head"><div><div class="sec-title">Route options</div><div class="sec-sub">Prioritise safety or speed</div></div></div>
        <div id="routeOpts" style="display:flex;flex-direction:column;gap:10px"></div>
        <button class="btn-dark" id="startNav">${svg(IC.shield,16)}Start guided navigation</button>
      </div>
      <div class="card pad mt hoverable">
        <div class="sec-head"><div><div class="sec-title">Map data layers</div><div class="sec-sub">Toggle what feeds the DSI</div></div></div>
        <div class="layer-row">
          <div class="layer-tog"><span class="lt-ico tint-yellow">${svg(IC.bulb,16)}</span><div><div class="lt-name">Infrastructure</div><div class="lt-desc">Lights · CCTV · 24/7 shops</div></div><button class="switch on" data-layer="infra"></button></div>
          <div class="layer-tog"><span class="lt-ico tint-sky">${svg(IC.building,16)}</span><div><div class="lt-name">Official</div><div class="lt-desc">Crime & police records</div></div><button class="switch" data-layer="official"></button></div>
          <div class="layer-tog"><span class="lt-ico tint-coral">${svg(IC.users,16)}</span><div><div class="lt-name">Community</div><div class="lt-desc">Vibe · lighting · crowd</div></div><button class="switch on" data-layer="community"></button></div>
        </div>
      </div>
    </div>
  </div>`;
}
function renderRoutes(){
  const box=document.getElementById('routeOpts'); if(!box)return;
  const rs=curRoutes();
  box.innerHTML=rs.map((r,i)=>{const sc=dsiScore(r);const tone=sc>=85?'green':sc>=70?'yellow':'coral';
    return `<button class="route-opt${i===SELECTED?' sel':''}" data-route="${i}">
      <span class="ro-l"><span class="ro-ico tint-${tone}">${svg(IC.route,18)}</span><span><span class="ro-name">${r.name}</span><br><span class="ro-meta">${r.meta}</span></span></span>
      <span><span class="ro-time">${r.time}</span><br><span class="pill pill-${tone}" style="float:right;margin-top:3px">DSI ${sc}</span></span>
    </button>`;}).join('');
  box.querySelectorAll('[data-route]').forEach(b=>b.addEventListener('click',()=>{SELECTED=+b.dataset.route;renderRoutes();drawRoute();updateScore();}));
}
function updateScore(){
  const rs=curRoutes(), r=rs[SELECTED]; if(!r)return; const sc=dsiScore(r);
  const g=document.getElementById('gauge'); if(!g)return;
  const col=sc>=85?'#188a5a':sc>=70?'#eab308':'#f4643f';
  g.innerHTML=gauge(sc,{size:150,color:col});
  document.getElementById('scoreNum').textContent=sc;
  document.getElementById('scoreNum').style.color=col;
  const lbl=sc>=85?'Very Safe':sc>=70?'Moderate':'Use caution';
  document.getElementById('scoreLbl').textContent=`/100 · ${lbl}`;
  const bb=document.getElementById('scoreBadges');
  if(bb){ const b=(ic,t,txt)=>`<div class="b"><span class="bi tint-${t}">${svg(IC[ic],14)}</span>${txt}</div>`;
    bb.innerHTML = r.live
      ? b('bulb','yellow',r.live.lamps+' streetlights')+b('store','green',r.live.havens+' safe havens')+b('cam','sky',r.live.cctv+' CCTV cameras')
      : b('bulb','yellow','Well-lit streets')+b('users','coral','6 guardians nearby')+b('activity','green','High foot traffic');
  }
}
function drawRoute(){
  if(!MAP)return; const rs=curRoutes(), r=rs[SELECTED]; if(!r)return; const sc=dsiScore(r);
  const col=sc>=85?'#188a5a':sc>=70?'#eab308':'#f4643f';
  if(ROUTE_LAYER)MAP.removeLayer(ROUTE_LAYER);
  const dot=(html)=>L.divIcon({className:'',html,iconSize:[18,18],iconAnchor:[9,9]});
  ROUTE_LAYER=L.layerGroup([
    L.polyline(r.path,{color:col,weight:11,opacity:.16,lineCap:'round'}),
    L.polyline(r.path,{color:col,weight:4.5,opacity:.95,lineCap:'round'}),
    L.marker(r.path[0],{icon:dot('<div style="width:16px;height:16px;border-radius:50%;background:#188a5a;border:3px solid #fff;box-shadow:0 2px 8px rgba(24,138,90,.55)"></div>')}).bindTooltip('Start · '+FROM_LABEL),
    L.marker(r.path[r.path.length-1],{icon:dot(`<div style="width:16px;height:16px;border-radius:50%;background:${col};border:3px solid #fff;box-shadow:0 2px 8px rgba(0,0,0,.25)"></div>`)}).bindTooltip(TO_LABEL),
  ]).addTo(MAP);
  MAP.fitBounds(L.polyline(r.path).getBounds(),{padding:[50,50]});
}
function applyCtxLayers(){
  if(!MAP)return;
  Object.values(CTX_LAYERS).forEach(l=>{if(l&&MAP.hasLayer(l))MAP.removeLayer(l);});
  const dot=(c,sz=12,ring=.4)=>L.divIcon({className:'',html:`<div style="width:${sz}px;height:${sz}px;border-radius:50%;background:${c};border:2.5px solid #fff;box-shadow:0 2px 6px rgba(0,0,0,${ring})"></div>`,iconSize:[sz,sz],iconAnchor:[sz/2,sz/2]});
  if(LIVE.active&&LIVE.pois){
    const cap=(a,n)=>a.slice(0,n), byCat=c=>LIVE.pois.filter(p=>p.cat===c);
    if(LAYER_STATE.infra){
      CTX_LAYERS.infra=L.layerGroup([
        ...cap(byCat('lamp'),80).map(p=>L.marker([p.lat,p.lng],{icon:dot('#eab308',8,.3)}).bindTooltip(p.name||'Streetlight')),
        ...cap(byCat('cctv'),50).map(p=>L.marker([p.lat,p.lng],{icon:dot('#2f80d6',10)}).bindTooltip(p.name||'CCTV camera')),
      ]).addTo(MAP);
    }
    if(LAYER_STATE.official){
      CTX_LAYERS.official=L.layerGroup(cap(byCat('police'),40).map(p=>L.marker([p.lat,p.lng],{icon:dot('#123227',12)}).bindTooltip('Police · '+(p.name||'station')))).addTo(MAP);
    }
    if(LAYER_STATE.community){
      CTX_LAYERS.community=L.layerGroup(cap(byCat('haven'),60).map(p=>L.marker([p.lat,p.lng],{icon:dot('#188a5a',12)}).bindTooltip('Safe Haven · '+(p.name||'24/7 spot')))).addTo(MAP);
    }
    return;
  }
  if(LAYER_STATE.infra){
    CTX_LAYERS.infra=L.layerGroup([
      L.marker([28.6205,77.2200],{icon:dot('#eab308')}).bindTooltip('Working streetlight'),
      L.marker([28.6262,77.2180],{icon:dot('#2f80d6')}).bindTooltip('CCTV camera'),
      L.marker([28.6230,77.2186],{icon:dot('#2f80d6')}).bindTooltip('Safe Haven · Apollo 24/7 Pharmacy'),
    ]).addTo(MAP);
  }
  if(LAYER_STATE.official){
    CTX_LAYERS.official=L.layerGroup([
      L.circle([28.6172,77.2262],{radius:300,color:'#e5484d',fillColor:'#e5484d',fillOpacity:.1,weight:1}).bindTooltip('Historical incident cluster'),
    ]).addTo(MAP);
  }
  if(LAYER_STATE.community){
    CTX_LAYERS.community=L.layerGroup([
      L.marker([28.6210,77.2196],{icon:dot('#8b5cf6')}).bindTooltip('Guardian online'),
      L.marker([28.6285,77.2176],{icon:dot('#8b5cf6')}).bindTooltip('Guardian online'),
      L.circle([28.6300,77.2205],{radius:220,color:'#f7c948',fillColor:'#f7c948',fillOpacity:.12,weight:1}).bindTooltip('Community: "deserted after 9pm"'),
    ]).addTo(MAP);
  }
}
function initMap(){
  MAP=L.map('map',{zoomControl:true,attributionControl:true}).setView(CITY.c,14);
  L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png',{attribution:'© OpenStreetMap © CARTO · SafeSphere',maxZoom:20}).addTo(MAP);
  applyCtxLayers(); drawRoute();
}
function postNav(){
  document.getElementById('gauge').innerHTML=gauge(98,{size:150});
  renderRoutes(); updateScore();
  try{initMap();}catch(e){console.error(e);}
  const rng=document.getElementById('dsiRange');
  rng.addEventListener('input',()=>{
    HOUR=+rng.value; const ph=phaseOf(HOUR);
    document.getElementById('dsiClock').textContent=String(HOUR).padStart(2,'0')+':00';
    const pill=document.getElementById('phasePill'); pill.innerHTML=`<span class="d" style="background:${ph[1]}"></span>${ph[0]}`;
    pill.className='pill pill-'+((HOUR>=19||HOUR<6)?'coral':'green');
    document.getElementById('scoreSub').textContent='Live DSI · '+ph[0].toLowerCase();
    renderRoutes(); updateScore(); drawRoute();
  });
  document.querySelectorAll('[data-layer]').forEach(sw=>sw.addEventListener('click',()=>{
    const k=sw.dataset.layer; LAYER_STATE[k]=!LAYER_STATE[k]; sw.classList.toggle('on',LAYER_STATE[k]); applyCtxLayers();
    toast((LAYER_STATE[k]?'Enabled ':'Disabled ')+k+' layer');
  }));
  document.getElementById('goBtn').addEventListener('click',runLive);
  ['fromInput','toInput'].forEach(id=>{const el=document.getElementById(id); if(el)el.addEventListener('keydown',e=>{if(e.key==='Enter')runLive();});});
  const cs=document.getElementById('citySel');
  if(cs)cs.addEventListener('change',()=>{
    CITY=CITIES[+cs.value];
    document.getElementById('fromInput').value=CITY.from;
    document.getElementById('toInput').value=CITY.to;
    LIVE.active=false; LIVE.pois=null;
    if(MAP)MAP.setView(CITY.c,13);
    setNavStatus('Loading live data for '+CITY.name+'…','load');
    runLive();
  });
  const gb=document.getElementById('geoBtn');
  if(gb)gb.addEventListener('click',()=>{
    if(!navigator.geolocation){toast('Geolocation not supported');return;}
    setNavStatus('Getting your location…','load'); gb.disabled=true;
    navigator.geolocation.getCurrentPosition(pos=>{
      USER_LOC={lat:pos.coords.latitude,lng:pos.coords.longitude};
      document.getElementById('fromInput').value='My location';
      if(MAP)MAP.setView([USER_LOC.lat,USER_LOC.lng],15);
      gb.disabled=false; toast('Located you — routing from here'); runLive();
    },err=>{
      gb.disabled=false;
      setNavStatus('Could not get your location ('+(err.message||'denied')+') — type a start instead','err');
      toast('Location unavailable');
    },{enableHighAccuracy:true,timeout:8000});
  });
  document.getElementById('startNav').addEventListener('click',()=>toast('Guided navigation started · stay on lit corridors'));
}

/* ================= VIEW: SOS & GUARDIAN ================= */
const CONTACTS=[['Amma','Mother · +91 •••• 21','green'],['Priya','Roommate · +91 •••• 88','coral'],['Campus Security','24/7 desk','sky']];
function vSos(){
  return `
  <div class="grid g12">
    <div class="col-5">
      <div class="card hoverable" style="overflow:hidden">
        <div class="sos-hero" style="background:radial-gradient(circle at 50% 0,#fdece6,#fff)">
          <button class="sos-btn-big" id="sosBig">SOS</button>
          <div class="sos-sub">Press & hold to alert your trusted circle and the nearest Guardian Node with your live location.</div>
          <div style="display:flex;gap:10px;margin-top:22px;width:100%">
            <button class="chk chk-ok" id="shareLoc">${svg(IC.pin,15)} Share live location</button>
            <button class="chk" style="background:#123227;color:#fff" id="fakeCall">${svg(IC.phone,15)} Fake call</button>
          </div>
        </div>
      </div>
    </div>
    <div class="col-7">
      <div class="card pad hoverable">
        <div class="sec-head"><div><div class="sec-title">Active Monitoring</div><div class="sec-sub">Prevention-first — we don't wait for you to call</div></div><span class="pill pill-green"><span class="d" style="background:var(--green)"></span>Watching</span></div>
        <div class="monitor">
          <div class="mi">${svg(IC.eye,19)}</div>
          <div style="flex:1">
            <div style="font-size:13.5px;font-weight:800">You've paused in a moderate-safety zone</div>
            <div style="font-size:12px;color:var(--muted);margin-top:3px">Stationary for 4 min near Paharganj underpass. Everything okay? If you don't respond in 60s, we'll alert your circle.</div>
            <div class="checkin-btns"><button class="chk chk-ok" id="imOk">${svg(IC.check,15)} I'm okay</button><button class="chk chk-no" id="needHelp">${svg(IC.warn,15)} Send help</button></div>
          </div>
        </div>
      </div>
      <div class="grid g2 mt">
        <div class="card pad hoverable">
          <div class="sec-head"><div><div class="sec-title">Trusted Circle</div><div class="sec-sub">Auto-notified on SOS</div></div></div>
          ${CONTACTS.map(c=>`<div class="contact"><span class="cav" style="background:${TONE[c[2]]}">${c[0][0]}</span><div><div class="cn">${c[0]}</div><div class="cr">${c[1]}</div></div><button class="cbtn">${svg(IC.phone,15)}</button></div>`).join('')}
        </div>
        <div class="card pad hoverable">
          <div class="sec-head"><div><div class="sec-title">Nearest Safe Havens</div><div class="sec-sub">Green-badge Guardian Nodes</div></div></div>
          ${[['Apollo 24/7 Pharmacy','120 m · open 24/7'],['24Seven Store','240 m · open now'],['Chaayos Café','300 m · closes 11pm']].map(h=>`
            <div class="contact"><span class="cav" style="background:var(--green-50);color:var(--green);position:relative">${svg(IC.store,16)}<span class="hbadge">${svg(IC.check,10)}</span></span><div><div class="cn">${h[0]}</div><div class="cr">${h[1]}</div></div><button class="cbtn">${svg(IC.nav,15)}</button></div>`).join('')}
        </div>
      </div>
      <div class="card pad mt hoverable">
        <div class="sec-head"><div><div class="sec-title">Emergency Timeline</div><div class="sec-sub">What happens the moment you trigger SOS</div></div></div>
        <div style="display:flex;flex-direction:column;gap:0">
          ${[['0s','SOS triggered — loud siren + flashing screen','coral'],['1s','Live GPS shared with trusted circle','green'],['2s','Nearest Guardian Node & campus security notified','sky'],['3s','Auto-recording of audio begins','yellow']].map((s,i)=>`
            <div style="display:flex;gap:12px;align-items:flex-start;padding:10px 0;border-top:${i?'1px solid #eef4ef':'none'}">
              <span class="mono" style="font-size:11px;color:var(--muted-2);width:26px;padding-top:2px">${s[0]}</span>
              <span style="width:11px;height:11px;border-radius:50%;background:${TONE[s[2]]};margin-top:3px;flex:none;box-shadow:0 0 0 4px ${TONE[s[2]]}22"></span>
              <span style="font-size:13px;font-weight:600;color:var(--ink-2)">${s[1]}</span>
            </div>`).join('')}
        </div>
      </div>
    </div>
  </div>`;
}
function postSos(){
  const big=document.getElementById('sosBig'); let held;
  const trigger=()=>toast('🚨 SOS sent · trusted circle + nearest Guardian Node alerted');
  big.addEventListener('mousedown',()=>{held=setTimeout(trigger,600);});
  big.addEventListener('mouseup',()=>clearTimeout(held));
  big.addEventListener('mouseleave',()=>clearTimeout(held));
  big.addEventListener('click',trigger);
  document.getElementById('shareLoc').addEventListener('click',()=>toast('Live location shared for 60 min'));
  document.getElementById('fakeCall').addEventListener('click',()=>toast('Fake call incoming in 5s…'));
  document.getElementById('imOk').addEventListener('click',()=>toast("Glad you're safe — monitoring continues"));
  document.getElementById('needHelp').addEventListener('click',()=>toast('🚨 Help dispatched to your live location'));
}

/* ================= VIEW: COMMUNITY REPORTS ================= */
let VIBE=null, CHIPS=new Set();
function vCommunity(){
  const reports=[
    ['bulb','yellow','Streetlight out on Rajpath','Infrastructure · reported by 3 people','2m'],
    ['users','coral','Catcalling near the underpass','Community · flagged unsafe vibe','8m'],
    ['check','green','Well-lit & busy after class','Community · positive vibe','15m'],
    ['cam','sky','New CCTV confirmed at gate','Infrastructure · verified','22m'],
    ['warn','rose','Deserted road after 9pm','Community · avoid alone','35m'],
  ];
  return `
  <div class="grid g4">
    ${kpiCard({icon:'megaphone',tint:'coral',label:'Reports Today',value:'482',delta:'+12%',spark:[20,26,30,28,34,40,44,48,46,48],sparkColor:'#f4643f'})}
    ${kpiCard({icon:'bulb',tint:'yellow',label:'Infra Issues Flagged',value:'96',delta:'+8',spark:[6,7,7,8,8,9,9,9,10,10],sparkColor:'#eab308'})}
    ${kpiCard({icon:'shield',tint:'green',label:'Verified Reports',value:'91%',delta:'+2.4%',spark:[80,82,84,85,86,88,89,90,90,91],sparkColor:'#188a5a'})}
    ${kpiCard({icon:'users',tint:'sky',label:'Active Contributors',value:'12.4k',delta:'+310',spark:[8,9,9,10,10,11,11,12,12,12],sparkColor:'#2f80d6'})}
  </div>
  <div class="grid g12 mt">
    <div class="col-5">
      <div class="card pad hoverable">
        <div class="sec-head"><div><div class="sec-title">Report this spot</div><div class="sec-sub">Collective intelligence — your input guides thousands</div></div></div>
        <div class="lbl" style="margin-bottom:8px">How does it feel right now?</div>
        <div style="display:flex;gap:10px" id="vibes">
          ${[['😀','Safe'],['🙂','Okay'],['😟','Uneasy'],['😨','Unsafe']].map((v,i)=>`<button class="vibe-btn" data-vibe="${i}" title="${v[1]}">${v[0]}</button>`).join('')}
        </div>
        <div class="lbl" style="margin:16px 0 8px">What did you notice?</div>
        <div class="tagrow" id="chips">
          ${['Poor lighting','Broken streetlight','Deserted','Catcalling','Crowded & safe','CCTV present','Stray dogs','Open shops'].map(t=>`<button class="chip" data-chip="${t}">${t}</button>`).join('')}
        </div>
        <textarea class="textarea" rows="3" style="margin-top:14px" placeholder="Add a note (optional)…"></textarea>
        <div class="trust" style="margin-top:12px">${svg(IC.lock,16)}<span><b>Trust Factor:</b> Geofencing confirms you're actually here; identity linking blocks spam.</span></div>
        <button class="btn-dark" id="submitReport" style="margin-top:14px">${svg(IC.send,16)}Submit report</button>
      </div>
    </div>
    <div class="col-7">
      <div class="card pad hoverable">
        <div class="sec-head"><div><div class="sec-title">Live Community Feed</div><div class="sec-sub">Real-time reports near you</div></div><span class="pill pill-green"><span class="d" style="background:var(--green)"></span>Live</span></div>
        ${reports.map(r=>`<div class="report"><span class="ri tint-${r[1]}">${svg(IC[r[0]],16)}</span><div style="flex:1"><div class="rt">${r[2]}</div><div class="rm">${r[3]}</div></div><span class="rv"><span class="pill pill-slate mono">${r[4]}</span></span></div>`).join('')}
      </div>
      <div class="grid g2 mt">
        <div class="card pad hoverable">
          <div class="sec-head"><div><div class="sec-title">Report Categories</div><div class="sec-sub">Last 30 days</div></div></div>
          <div class="donut-wrap">
            <div>${donut([{v:44,c:'#f4643f'},{v:30,c:'#eab308'},{v:18,c:'#188a5a'},{v:8,c:'#2f80d6'}],140)}</div>
            <ul class="legend">
              <li><i style="background:#f4643f"></i>Vibe / safety<b>44%</b></li>
              <li><i style="background:#eab308"></i>Lighting<b>30%</b></li>
              <li><i style="background:#188a5a"></i>Positive<b>18%</b></li>
              <li><i style="background:#2f80d6"></i>Infrastructure<b>8%</b></li>
            </ul>
          </div>
        </div>
        <div class="card pad hoverable">
          <div class="sec-head"><div><div class="sec-title">Top Contributors</div><div class="sec-sub">Guardian points</div></div></div>
          ${[['Ananya R.','Campus · 214 reports','9.8k','green'],['Meera S.','Riverside · 187','8.4k','coral'],['Kavya P.','Midtown · 176','7.9k','yellow'],['Diya N.','Old Town · 158','7.1k','sky']].map((g,i)=>`
            <div class="contact"><span class="mono" style="width:16px;color:var(--muted-2);font-weight:800">${i+1}</span><span class="cav" style="background:${TONE[g[3]]}">${g[0][0]}</span><div><div class="cn">${g[0]}</div><div class="cr">${g[1]}</div></div><span class="rv" style="font-weight:800;color:var(--green)">${g[2]}</span></div>`).join('')}
        </div>
      </div>
    </div>
  </div>`;
}
function postCommunity(){
  document.querySelectorAll('[data-vibe]').forEach(b=>b.addEventListener('click',()=>{
    document.querySelectorAll('[data-vibe]').forEach(x=>x.classList.remove('sel')); b.classList.add('sel'); VIBE=b.dataset.vibe;
  }));
  document.querySelectorAll('[data-chip]').forEach(b=>b.addEventListener('click',()=>{
    b.classList.toggle('on'); const t=b.dataset.chip; CHIPS.has(t)?CHIPS.delete(t):CHIPS.add(t);
  }));
  document.getElementById('submitReport').addEventListener('click',()=>{ toast('Report verified & added to the map — thank you!'); });
}

/* ================= VIEW: CITY ANALYTICS ================= */
const ZONES=[['Connaught Place',96,'+4','green'],['Hauz Khas',91,'+2','green'],['Saket',88,'+3','green'],['Dwarka',84,'+1','sky'],['Paharganj',63,'-3','yellow'],['Outer Ring Road',48,'-6','rose']];
function vCity(){
  return `
  <div class="card pad hoverable" style="margin-bottom:14px">
    <div class="sec-head">
      <div><div class="sec-title">Live infrastructure scan · OpenStreetMap</div><div class="sec-sub" id="cityStatsSub">Real safety assets within ~2 km of the city centre</div></div>
      <select id="cityAnalyticsSel" class="city-sel">${CITIES.map((c,i)=>`<option value="${i}"${i===CITIES.indexOf(CITY)?' selected':''}>${c.name}</option>`).join('')}</select>
    </div>
    <div class="grid g4" style="margin-top:6px">
      ${[['bulb','yellow','Street lamps','clLamp'],['cam','sky','CCTV cameras','clCctv'],['shield','green','Police stations','clPolice'],['store','coral','Safe havens','clHaven']].map(x=>`
        <div style="border:1px solid var(--stroke);border-radius:14px;padding:14px">
          <div class="kpi-ico tint-${x[1]}" style="width:38px;height:38px">${svg(IC[x[0]],18)}</div>
          <div style="font-size:26px;font-weight:900;margin-top:10px" id="${x[3]}">…</div>
          <div style="font-size:12px;font-weight:700;color:var(--ink-2)">${x[2]}</div>
        </div>`).join('')}
    </div>
  </div>
  <div class="grid g4">
    ${kpiCard({icon:'shield',tint:'green',label:'City Safety Index',value:'<span id="clIndex">86.2</span>',delta:'live',spark:[70,72,74,73,78,80,79,83,85,86],sparkColor:'#188a5a'})}
    ${kpiCard({icon:'bulb',tint:'yellow',label:'Broken Streetlights',value:'214',delta:'-38',spark:[280,272,266,258,250,244,238,228,220,214],sparkColor:'#eab308'})}
    ${kpiCard({icon:'warn',tint:'coral',label:'High-Risk Zones',value:'7',delta:'-2',spark:[12,11,11,10,9,9,8,8,7,7],sparkColor:'#f4643f'})}
    ${kpiCard({icon:'heart',tint:'sky',label:'Women Mobility ↑',value:'+18%',delta:'YoY',spark:[100,103,105,108,110,112,114,116,117,118],sparkColor:'#2f80d6'})}
  </div>
  <div class="grid g12 mt">
    <div class="col-8">
      <div class="card pad hoverable">
        <div class="sec-head"><div><div class="sec-title">Citywide Safety Index</div><div class="sec-sub">Rolling 12-week trend · DSI model v4</div></div><span class="pill pill-green">Weekly</span></div>
        ${lineChart([66,68,67,71,70,74,76,75,80,82,84,86])}
        <div class="chart-x mono"><span>W1</span><span>W3</span><span>W5</span><span>W7</span><span>W9</span><span>W11</span><span>Now</span></div>
      </div>
      <div class="card pad mt hoverable">
        <div class="sec-head"><div><div class="sec-title">Data for Change — Infrastructure Gaps</div><div class="sec-sub">Shared with the Municipal Corporation: exactly which street needs a lamp</div></div><button class="btn-ghost" style="width:auto;margin:0;padding:8px 14px" id="exportGov">${svg(IC.send,15)}Export report</button></div>
        <div class="grid g3">
          ${[['bulb','yellow','Streetlights down','214','Rajpath · Janpath · Ring Rd'],['cam','sky','CCTV blind spots','63','Paharganj underpass'],['store','green','Guardian Node gaps','18','Outer Ring Rd needs havens']].map(x=>`
            <div style="border:1px solid var(--stroke);border-radius:14px;padding:14px">
              <div class="kpi-ico tint-${x[1]}" style="width:38px;height:38px">${svg(IC[x[0]],18)}</div>
              <div style="font-size:22px;font-weight:900;margin-top:10px">${x[3]}</div>
              <div style="font-size:12.5px;font-weight:700;color:var(--ink-2)">${x[2]}</div>
              <div style="font-size:11px;color:var(--muted-2);margin-top:4px">${x[4]}</div>
            </div>`).join('')}
        </div>
      </div>
    </div>
    <div class="col-4">
      <div class="card pad hoverable">
        <div class="sec-head"><div><div class="sec-title">Zone Safety Ranking</div><div class="sec-sub">Neighborhood DSI scores</div></div></div>
        <div>${ZONES.map((z,i)=>`<div class="rank"><span class="n mono">${i+1}</span><span class="nm">${z[0]}</span><span class="bar"><i style="width:${z[1]}%;background:${TONE[z[3]]}"></i></span><span class="sc">${z[1]}</span><span class="tr ${z[2].startsWith('-')?'down':'up'}">${z[2]}</span></div>`).join('')}</div>
      </div>
      <div class="card pad mt hoverable">
        <div class="sec-head"><div><div class="sec-title">Journeys Guided</div><div class="sec-sub">Hourly · today</div></div></div>
        ${bars([8,14,22,30,26,34,42,38,46,52,44,30])}
        <div class="chart-x mono"><span>6a</span><span>10a</span><span>2p</span><span>6p</span><span>10p</span></div>
      </div>
      <div class="card pad mt hoverable">
        <div class="sec-head"><div><div class="sec-title">Incident Mix</div><div class="sec-sub">Resolved via prevention</div></div></div>
        <div class="donut-wrap">
          <div>${donut([{v:58,c:'#188a5a'},{v:26,c:'#2f80d6'},{v:11,c:'#eab308'},{v:5,c:'#e5484d'}],130)}</div>
          <ul class="legend"><li><i style="background:#188a5a"></i>Rerouted safely<b>58%</b></li><li><i style="background:#2f80d6"></i>Monitored<b>26%</b></li><li><i style="background:#eab308"></i>Guardian visit<b>11%</b></li><li><i style="background:#e5484d"></i>SOS escalated<b>5%</b></li></ul>
        </div>
      </div>
    </div>
  </div>`;
}
function postCity(){
  const b=document.getElementById('exportGov'); if(b)b.addEventListener('click',()=>toast('Infrastructure report exported to Municipal Corporation'));
  const sel=document.getElementById('cityAnalyticsSel');
  const set=(id,v)=>{const e=document.getElementById(id);if(e)e.textContent=v;};
  const load=async()=>{
    const sub=document.getElementById('cityStatsSub');
    if(sub)sub.textContent='Scanning '+CITY.name+' live (OpenStreetMap)…';
    ['clLamp','clCctv','clPolice','clHaven'].forEach(id=>set(id,'…'));
    try{
      const s=await cityStats(CITY);
      set('clLamp',s.lamps); set('clCctv',s.cctv); set('clPolice',s.police); set('clHaven',s.havens); set('clIndex',s.idx);
      if(sub)sub.textContent=`${CITY.name} · ${s.total} live safety assets within ~2 km of centre`;
    }catch(e){
      ['clLamp','clCctv','clPolice','clHaven'].forEach(id=>set(id,'—'));
      if(sub)sub.textContent='Live scan unavailable for '+CITY.name+' — showing model estimates';
    }
  };
  if(sel)sel.addEventListener('change',()=>{CITY=CITIES[+sel.value];load();});
  load();
}

/* ================= VIEW: SAFE HAVENS ================= */
function vHavens(){
  const havens=[
    ['Apollo 24/7 Pharmacy','Pharmacy · 24/7','Verified','120 m','green'],
    ['24Seven Store','Convenience · 24/7','Verified','240 m','green'],
    ['Chaayos Café','Café · till 11pm','Verified','300 m','green'],
    ['Om Book Shop','Bookstore · till 9pm','Pending','380 m','yellow'],
    ['Max Care Clinic','Clinic · 24/7','Verified','460 m','green'],
    ['Auto & Taxi Stand','Transport hub · 24/7','Verified','520 m','green'],
  ];
  return `
  <div class="grid g4">
    ${kpiCard({icon:'haven',tint:'green',label:'Certified Havens',value:'1,340',delta:'+28',spark:[10,12,14,16,18,20,23,25,27,28],sparkColor:'#188a5a'})}
    ${kpiCard({icon:'check',tint:'sky',label:'Verification Rate',value:'94%',delta:'+1.8%',spark:[86,88,89,90,91,92,92,93,94,94],sparkColor:'#2f80d6'})}
    ${kpiCard({icon:'users',tint:'coral',label:'Haven Visits · mo',value:'8,910',delta:'+12%',spark:[40,44,48,52,56,60,66,72,80,89],sparkColor:'#f4643f'})}
    ${kpiCard({icon:'shield',tint:'yellow',label:'Avg Trust Rating',value:'4.8',delta:'+0.2',spark:[42,43,44,45,46,46,47,47,48,48],sparkColor:'#eab308'})}
  </div>
  <div class="grid g12 mt">
    <div class="col-8">
      <div class="card pad hoverable">
        <div class="sec-head"><div><div class="sec-title">Guardian Nodes near you</div><div class="sec-sub">"Safe Haven" partner shops with the SafeSphere Green Badge — duck in if you feel followed</div></div><span class="pill pill-green">${svg(IC.check,13)}Green Badge</span></div>
        <div class="grid g2">
          ${havens.map(h=>`<div class="haven"><span class="hi">${svg(IC.store,20)}<span class="hbadge" style="background:${h[4]==='green'?'var(--green)':'var(--yellow)'}">${svg(IC.check,10)}</span></span><div><div class="hn">${h[0]}</div><div class="hm">${h[1]}</div></div><div class="hd"><span class="pill pill-${h[4]==='green'?'green':'yellow'}">${h[2]}</span><div style="font-size:12px;color:var(--muted-2);margin-top:5px">${h[3]}</div></div></div>`).join('')}
        </div>
      </div>
    </div>
    <div class="col-4">
      <div class="card pad hoverable" style="background:linear-gradient(135deg,#188a5a,#0f6e46);color:#fff;position:relative;overflow:hidden">
        <div style="position:absolute;right:-24px;top:-24px;width:120px;height:120px;border-radius:50%;background:rgba(247,201,72,.25)"></div>
        ${svg(IC.store,22)}
        <div style="font-size:17px;font-weight:900;margin-top:12px">Become a Safe Haven</div>
        <p style="font-size:12.5px;color:rgba(255,255,255,.85);margin-top:6px;line-height:1.55">Shops pay a small verification fee to earn the Green Badge and appear as a Guardian Node on the map.</p>
        <button class="go-btn" style="background:#fff;color:var(--green-2);margin-top:16px" id="applyHaven">${svg(IC.check,15)}Apply for certification</button>
      </div>
      <div class="card pad mt hoverable">
        <div class="sec-head"><div><div class="sec-title">Verification Checklist</div><div class="sec-sub">To earn the Green Badge</div></div></div>
        ${[['Well-lit & visible entrance',1],['Staff present during open hours',1],['CCTV on premises',1],['Willing to assist in emergencies',1],['Quarterly re-verification',0]].map(c=>`
          <div style="display:flex;align-items:center;gap:11px;padding:9px 0;border-top:1px solid #eef4ef">
            <span style="width:24px;height:24px;border-radius:8px;display:grid;place-items:center;flex:none;background:${c[1]?'var(--green-50)':'#eef4ef'};color:${c[1]?'var(--green)':'var(--muted-2)'}">${svg(IC.check,14)}</span>
            <span style="font-size:13px;font-weight:600;color:var(--ink-2)">${c[0]}</span>
          </div>`).join('')}
      </div>
    </div>
  </div>`;
}
function postHavens(){ const b=document.getElementById('applyHaven'); if(b)b.addEventListener('click',()=>toast('Certification request submitted for review')); }

/* ================= VIEW: SAFETY API (B2B) ================= */
function vApi(){
  const code=
`<span class="k">import</span> { SafeSphere } <span class="k">from</span> <span class="s">'@safesphere/sdk'</span>;

<span class="k">const</span> client = <span class="k">new</span> SafeSphere({ apiKey: process.env.SS_KEY });

<span class="c">// Request a predictive safe corridor (DSI-aware)</span>
<span class="k">const</span> route = <span class="k">await</span> client.corridors.plan({
  from: { lat: 40.7185, lng: -74.0092 },
  to:   { lat: 40.7328, lng: -73.9895 },
  optimize: <span class="s">'safety'</span>,   <span class="c">// 'safety' | 'balanced' | 'speed'</span>
  time: <span class="s">'now'</span>,           <span class="c">// DSI shifts by time of day</span>
});

console.log(route.safetyScore); <span class="c">// 98</span>`;
  return `
  <div class="grid g4">
    ${kpiCard({icon:'activity',tint:'green',label:'API Calls · 24h',value:'1.24M',delta:'+8.1%',spark:[30,34,32,38,40,44,46,50,54,58],sparkColor:'#188a5a'})}
    ${kpiCard({icon:'bolt',tint:'yellow',label:'Avg Latency',value:'86ms',delta:'-12ms',spark:[110,104,100,98,94,92,90,88,86,86],sparkColor:'#eab308'})}
    ${kpiCard({icon:'check',tint:'sky',label:'Uptime · 30d',value:'99.98%',delta:'SLA',spark:[99,100,100,99,100,100,100,99,100,100],sparkColor:'#2f80d6'})}
    ${kpiCard({icon:'plug',tint:'coral',label:'Active Integrations',value:'27',delta:'+3',spark:[18,19,20,21,22,23,24,25,26,27],sparkColor:'#f4643f'})}
  </div>
  <div class="grid g12 mt">
    <div class="col-5">
      <div class="card pad hoverable">
        <div class="sec-head"><div><div class="sec-title">API Credentials</div><div class="sec-sub">Sell the Safety Score to ride-hailing & delivery</div></div><span class="pill pill-green"><span class="d" style="background:var(--green)"></span>Live</span></div>
        <div class="lbl" style="margin-bottom:6px">Publishable key</div>
        <div class="field-copy" data-copy="pk_live_ss_9f2c7a41e8b6d035"><code>pk_live_ss_9f2c7a41e8b6d035</code><button>${svg(IC.copy,16)}</button></div>
        <div class="lbl" style="margin:14px 0 6px">Secret key</div>
        <div class="field-copy" data-copy="sk_live_ss_secret_4b7e"><code>sk_live_ss_••••••••••••4b7e</code><button>${svg(IC.copy,16)}</button></div>
        <button class="btn-ghost" id="rotate">${svg(IC.key,16)}Rotate keys</button>
      </div>
      <div class="card pad mt hoverable">
        <div class="sec-head"><div><div class="sec-title">Partner Integrations</div><div class="sec-sub">Safer routes for their drivers & customers</div></div></div>
        ${[['Uber','U','#123227','Driver & rider safe-route add-on'],['Zomato','Z','#e5484d','Late-night delivery routing'],['City Transit','C','#2f80d6','Bus-stop last-mile safety']].map(p=>`<div class="partner" style="margin-bottom:10px"><span class="pl" style="background:${p[2]}">${p[1]}</span><div><div style="font-size:13.5px;font-weight:800">${p[0]}</div><div style="font-size:11.5px;color:var(--muted-2)">${p[3]}</div></div><span class="pill pill-green" style="margin-left:auto">Connected</span></div>`).join('')}
      </div>
    </div>
    <div class="col-7">
      <div class="card pad hoverable">
        <div class="sec-head"><div><div class="sec-title">Quickstart · Node SDK</div><div class="sec-sub">Plan a DSI-aware safe corridor in 6 lines</div></div><span class="pill pill-slate">Docs</span></div>
        <div class="code-block">${code}</div>
        <div class="mini-grid">
          <div class="mini"><div class="t">${svg(IC.plug,14)}Webhooks</div><div class="v">3 active</div></div>
          <div class="mini"><div class="t">${svg(IC.globe,14)}Env</div><div class="v">Production</div></div>
          <div class="mini"><div class="t">${svg(IC.pin,14)}Region</div><div class="v">us-east · eu-west</div></div>
        </div>
      </div>
      <div class="card pad mt hoverable">
        <div class="sec-head"><div><div class="sec-title">Revenue Model</div><div class="sec-sub">How the platform sustains itself</div></div></div>
        <div class="grid g3">
          ${[['activity','green','Data Licensing','Safety scores sold to ride-hailing apps','$0.40 / 1k calls'],['store','yellow','Verification Fees','Shops pay to be certified Safe Havens','$49 / mo'],['building','sky','Gov. Data Deals','Infrastructure insights for city councils','Enterprise']].map(r=>`
            <div style="border:1px solid var(--stroke);border-radius:14px;padding:14px"><div class="kpi-ico tint-${r[1]}" style="width:38px;height:38px">${svg(IC[r[0]],18)}</div><div style="font-size:13.5px;font-weight:800;margin-top:10px">${r[2]}</div><div style="font-size:11.5px;color:var(--muted-2);margin-top:3px;line-height:1.45">${r[3]}</div><div class="pill pill-${r[1]}" style="margin-top:10px">${r[4]}</div></div>`).join('')}
        </div>
      </div>
      <div class="card pad mt hoverable">
        <div class="sec-head"><div><div class="sec-title">Recent Webhook Events</div><div class="sec-sub">corridor · risk · guardian streams</div></div></div>
        ${[['corridor.planned','route A-204 · DSI 98','green','2s'],['risk.detected','zone East Yards','coral','1m'],['guardian.dispatched','hub Midtown','sky','4m'],['corridor.completed','journey · score 96','green','7m']].map(e=>`<div class="evt"><code class="mono">${e[0]}</code><span class="pill pill-${e[2]}">200</span><span class="m">${e[1]}</span><span class="tm mono">${e[3]} ago</span></div>`).join('')}
      </div>
    </div>
  </div>`;
}
function postApi(){
  document.querySelectorAll('[data-copy]').forEach(el=>el.addEventListener('click',()=>{
    const btn=el.querySelector('button');
    try{navigator.clipboard&&navigator.clipboard.writeText(el.dataset.copy);}catch(e){}
    btn.innerHTML=svg(IC.check,16); btn.style.color='#188a5a';
    setTimeout(()=>{btn.innerHTML=svg(IC.copy,16);btn.style.color='';},1300);
    toast('Copied to clipboard');
  }));
  const r=document.getElementById('rotate'); if(r)r.addEventListener('click',()=>toast('New API keys generated'));
}

/* ---------- registry ---------- */
const RENDER={overview:vOverview,nav:vNav,sos:vSos,community:vCommunity,city:vCity,havens:vHavens,api:vApi};
const POST={overview:postOverview,nav:postNav,sos:postSos,community:postCommunity,city:postCity,havens:postHavens,api:postApi};

/* ================= LANDING / HOME PAGE ================= */
function fcard(icon,tint,title,desc,view){
  return `<div class="fcard" data-enter="${view}">
    <div class="fi2 tint-${tint}">${svg(IC[icon],22)}</div>
    <h4>${title}</h4><p>${desc}</p>
    <span class="open">Explore ${svg(IC.arrow,14)}</span>
  </div>`;
}
function fgroup(icon,tint,label,tag,cards){
  return `<div class="fgroup">
    <div class="fgroup-head"><span class="gi tint-${tint}">${svg(IC[icon],18)}</span><h3>${label}</h3><span class="gl">${tag}</span></div>
    <div class="fcards">${cards.map(c=>fcard(...c)).join('')}</div>
  </div>`;
}
function renderLanding(){
  const nav=`
  <nav class="lnav">
    <div class="lbrand" data-enter="home"><div class="em"></div><div><b>SafeSphere</b><span>#the_Safest_Map</span></div></div>
    <div class="lnav-links">
      <a href="#how">How it works</a>
      <a href="#features">Features</a>
      <a href="#data">Data layers</a>
      <a href="#roadmap">Roadmap</a>
    </div>
    <div class="lnav-cta">
      <button class="lbtn lbtn-coral" data-enter="sos">${svg(IC.sos,16)}Emergency SOS</button>
      <button class="lbtn lbtn-primary" data-enter="overview">${svg(IC.compass,16)}Launch dashboard</button>
    </div>
  </nav>`;

  const routeSvg=`<svg class="route" viewBox="0 0 500 430" preserveAspectRatio="none">
    <path d="M60 360 C140 330 150 250 230 235 C315 219 320 150 420 120" fill="none" stroke="#188a5a" stroke-width="16" opacity=".15" stroke-linecap="round"/>
    <path d="M60 360 C140 330 150 250 230 235 C315 219 320 150 420 120" fill="none" stroke="#188a5a" stroke-width="5" stroke-linecap="round" stroke-dasharray="1 14"/>
    <circle cx="60" cy="360" r="10" fill="#188a5a" stroke="#fff" stroke-width="4"/>
    <circle cx="420" cy="120" r="10" fill="#f4643f" stroke="#fff" stroke-width="4"/>
  </svg>`;
  const hero=`
  <div class="wrap">
    <div class="hero">
      <div>
        <span class="eyebrow"><span class="d"></span>Predictive Safety Navigation</span>
        <h1>Know the <em>safest way</em> — not just where you are.</h1>
        <p class="lead">SafeSphere assigns a live Dynamic Safety Index to every street and alley, then guides you through lit, guarded corridors. Community intelligence, active monitoring and SOS — all in one map.</p>
        <div class="hero-cta">
          <button class="lbtn lbtn-primary" data-enter="overview">${svg(IC.compass,17)}Launch dashboard</button>
          <a class="lbtn lbtn-ghost" href="#how">${svg(IC.play,16)}See how it works</a>
        </div>
        <div class="hero-stats">
          <div class="hs"><b>48,210</b><span>Streets scored</span></div>
          <div class="sep"></div>
          <div class="hs"><b>1,340</b><span>Safe Havens</span></div>
          <div class="sep"></div>
          <div class="hs"><b>126k</b><span>Community reports</span></div>
        </div>
      </div>
      <div class="hv">
        <div class="hv-map">
          <div class="hv-grid"></div>
          ${routeSvg}
          <div class="chip-float" style="top:34px;left:26px;animation-delay:.2s"><span class="ci tint-yellow">${svg(IC.bulb,15)}</span>Well-lit corridor</div>
          <div class="chip-float" style="top:150px;right:30px;animation-delay:1.1s"><span class="ci tint-coral">${svg(IC.users,15)}</span>Guardian nearby</div>
          <div class="chip-float" style="bottom:120px;left:40px;animation-delay:.7s"><span class="ci tint-sky">${svg(IC.store,15)}</span>Safe Haven · 120m</div>
          <div class="hv-score"><div class="lab">JOURNEY SCORE</div><div class="num">98</div><div class="sub">Very safe · well-lit route</div></div>
        </div>
      </div>
    </div>
  </div>`;

  const trust=`
  <div class="trust-strip"><div class="wrap"><div class="in">
    <span class="lbl2">Built for</span>
    <span class="badge2">${svg(IC.cap)}Campuses</span>
    <span class="badge2">${svg(IC.building)}Cities</span>
    <span class="badge2">${svg(IC.plug)}Ride-hailing & delivery</span>
    <span class="badge2">${svg(IC.heart)}Women's mobility</span>
  </div></div></div>`;

  const how=`
  <div class="wrap sect" id="how">
    <div class="sect-head">
      <span class="eyebrow"><span class="d"></span>How it works</span>
      <h2>From reactive SOS to <span class="k">knowing the safest way</span></h2>
      <p>Three simple stages turn crowd-sourced signals into a safer journey, every time you move.</p>
    </div>
    <div class="steps">
      <div class="step"><span class="snum">01</span><div class="sic tint-green">${svg(IC.route,24)}</div><h3>Score</h3><p>Every street gets a live Dynamic Safety Index built from infrastructure, official records and community vibe — and it shifts with the time of day.</p></div>
      <div class="step"><span class="snum">02</span><div class="sic tint-coral">${svg(IC.compass,24)}</div><h3>Route</h3><p>Navigation prioritises lit, busy, guarded corridors over the merely fastest path, rerouting you around low-safety zones.</p></div>
      <div class="step"><span class="snum">03</span><div class="sic tint-sky">${svg(IC.shield,24)}</div><h3>Protect</h3><p>Active monitoring checks in if you pause too long, while SOS and Guardian Nodes stand ready the entire way.</p></div>
    </div>
  </div>`;

  const features=`
  <div class="wrap sect" id="features">
    <div class="sect-head">
      <span class="eyebrow"><span class="d"></span>Platform features</span>
      <h2>Everything, organised around <span class="k">your safety</span></h2>
      <p>A complete safety platform — grouped into navigation intelligence, prevention & response, and tools for cities & partners. Tap any card to open it live.</p>
    </div>
    ${fgroup('compass','green','Navigate the safest way','Intelligence',[
      ['route','green','Dynamic Safety Index','A live score for every street & alley that changes with the time of day — never static.','nav'],
      ['users','coral','Collective Intelligence','Thousands of shared experiences (especially women\'s) guide each person to safety.','community'],
      ['layers','sky','Three Data Layers','Infrastructure, official records and community vibe combine into one trusted score.','nav'],
      ['lock','yellow','Trust Factor','Geofencing + identity linking stop fake reviews and spam reports.','community'],
    ])}
    ${fgroup('shield','coral','Prevention & response','Safety',[
      ['sos','coral','SOS System','Press & hold to alert your trusted circle and the nearest Guardian Node with live GPS.','sos'],
      ['eye','sky','Active Monitoring','Stop too long in a low-safety zone and SafeSphere proactively checks you\'re okay.','sos'],
      ['haven','green','Guardian Nodes','Green-badge Safe Haven shops you can duck into if you ever feel followed.','havens'],
      ['phone','yellow','Trusted Circle','Family & friends auto-notified with your location the moment you trigger SOS.','sos'],
    ])}
    ${fgroup('building','sky','For cities & platforms','B2B',[
      ['chart','green','City Analytics','Neighborhood safety indices and journey insights for planners.','city'],
      ['building','coral','Data for Change','Infrastructure-gap reports for the Municipal Corp — which street needs a lamp.','city'],
      ['plug','sky','Safety API','Sell the DSI-aware safe corridor to Uber, Zomato & transit apps.','api'],
      ['activity','yellow','Revenue Model','Data licensing, verification fees and government data deals.','api'],
    ])}
  </div>`;

  const data=`
  <div class="wrap sect" id="data">
    <div class="band">
      <div class="blob" style="right:-40px;top:-40px;width:200px;height:200px;background:rgba(247,201,72,.22)"></div>
      <div class="blob" style="left:-30px;bottom:-50px;width:180px;height:180px;background:rgba(244,100,63,.2)"></div>
      <span class="eyebrow" style="background:rgba(255,255,255,.16);color:#fff;border-color:rgba(255,255,255,.24)"><span class="d" style="background:var(--yellow);box-shadow:none"></span>The engine</span>
      <h2 style="font-size:30px;font-weight:900;letter-spacing:-.03em;margin-top:14px;max-width:560px;line-height:1.15">Three data layers score every street</h2>
      <div class="dl-grid">
        <div class="dl"><div class="di">${svg(IC.bulb,22)}</div><h4>Infrastructure</h4><p>The physical safety net of a street, mapped block by block.</p><div class="tags"><span>Streetlights</span><span>CCTV</span><span>24/7 shops</span></div></div>
        <div class="dl"><div class="di">${svg(IC.building,22)}</div><h4>Official</h4><p>Ground-truth from authorities and public safety statistics.</p><div class="tags"><span>Police records</span><span>Crime stats</span></div></div>
        <div class="dl"><div class="di">${svg(IC.users,22)}</div><h4>Community</h4><p>The human vibe — how a place actually feels, right now.</p><div class="tags"><span>Lighting</span><span>Crowd density</span><span>Vibe</span></div></div>
      </div>
      <div class="band-trust">${svg(IC.lock,22)}<span><b>Trust Factor —</b> geofencing confirms a reporter is really there and identity linking blocks spam, so the score you see is one you can trust.</span></div>
    </div>
  </div>`;

  const roadmap=`
  <div class="wrap sect" id="roadmap">
    <div class="sect-head">
      <span class="eyebrow"><span class="d"></span>Roadmap</span>
      <h2>Our path to a <span class="k">safer city</span></h2>
      <p>Starting focused on campuses, scaling to a network of Guardian Nodes, then powering the platforms you already use.</p>
    </div>
    <div class="road">
      <div class="rstep"><div class="rdot" style="background:var(--green)">1</div><h4>Campus Pilot</h4><p>Prove the model on hostel → gate → bus-stop routes where safety matters most.</p><span class="ph">Now</span></div>
      <div class="rstep"><div class="rdot" style="background:var(--yellow-2)">2</div><h4>Guardian Nodes</h4><p>Grow a city-wide web of green-badge Safe Haven partner shops.</p><span class="ph">Next</span></div>
      <div class="rstep"><div class="rdot" style="background:var(--coral)">3</div><h4>B2B Safety API</h4><p>Power safe routing inside Uber, Zomato and public transit apps.</p><span class="ph">Scale</span></div>
    </div>
  </div>`;

  const cta=`
  <div class="wrap sect-tight">
    <div class="cta-band">
      <span class="eyebrow"><span class="d"></span>Live interactive demo</span>
      <h2 style="margin-top:16px">Ready to see it live?</h2>
      <p>Explore the full SafeSphere platform — safe navigation, SOS, community reports, city analytics and the B2B API.</p>
      <div class="hero-cta">
        <button class="lbtn lbtn-primary" data-enter="overview">${svg(IC.compass,17)}Launch dashboard</button>
        <button class="lbtn lbtn-dark" data-enter="nav">${svg(IC.nav,16)}Try safe navigation</button>
      </div>
    </div>
  </div>`;

  const foot=`
  <footer class="lfoot"><div class="wrap"><div class="in">
    <div class="lbrand" style="display:flex;align-items:center;gap:11px"><div class="em" style="width:36px;height:36px;border-radius:11px;overflow:hidden;position:relative;background:#fff;border:1px solid var(--stroke)"></div><div><b style="font-size:15px;font-weight:900;color:var(--green-2)">SafeSphere</b><small style="display:block">Most apps tell you where you are; we tell you where it's safe to be.</small></div></div>
    <div class="fl"><a href="#how">How it works</a><a href="#features">Features</a><a href="#roadmap">Roadmap</a><a href="#" data-enter="api">Safety API</a></div>
  </div></div></footer>`;

  document.getElementById('landing').innerHTML = nav+hero+trust+how+features+data+roadmap+cta+foot;
  // fix footer emblem bg
  const fe=document.querySelector('.lfoot .em'); if(fe) fe.style.backgroundImage="url('logo.jpeg')",fe.style.backgroundSize='210%',fe.style.backgroundPosition='50% 26%';
  document.querySelectorAll('#landing [data-enter]').forEach(el=>el.addEventListener('click',e=>{
    e.preventDefault(); const v=el.dataset.enter; if(v==='home'){document.getElementById('landing').scrollTop=0;} else enterDashboard(v);
  }));
}

/* ---------- view switching between home & dashboard ---------- */
function enterDashboard(view){
  document.getElementById('landing').classList.add('hidden');
  document.getElementById('dashboard').classList.remove('hidden');
  setView(view&&RENDER[view]?view:'overview');
  document.querySelector('.content').scrollTop=0;
}
function goHome(){
  document.getElementById('dashboard').classList.add('hidden');
  const l=document.getElementById('landing'); l.classList.remove('hidden'); l.scrollTop=0;
}

/* ---------- boot ---------- */
function boot(){
  buildNav();
  renderLanding();
  setView('overview');
  document.getElementById('sosSide').addEventListener('click',()=>setView('sos'));
  const hn=document.getElementById('homeNav'); if(hn)hn.addEventListener('click',goHome);
  const brand=document.querySelector('.sidebar .brand'); if(brand){brand.style.cursor='pointer';brand.title='Back to home';brand.addEventListener('click',goHome);}
}
if(document.readyState!=='loading') boot(); else document.addEventListener('DOMContentLoaded',boot);
