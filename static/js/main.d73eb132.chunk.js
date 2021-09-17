(this["webpackJsonpreact-app"]=this["webpackJsonpreact-app"]||[]).push([[0],{28:function(e,s,i){},30:function(e,s,i){},36:function(e,s,i){"use strict";i.r(s);var a=i(0),n=i.n(a),t=i(7),c=i.n(t),r=(i(28),i(17)),d=i(22),l=i(8),o=i(16),f=i.n(o),j=i(19),p=i(21),u=i(44),b=i(45),g=i(43),h=i(42),O=i(23),x=(i(30),i(31),i(1)),m=function(e){var s=e.children;return Object(x.jsx)("div",{className:"column",children:s})};Object(O.a)({basename:"/cgp-transcription-analysis"});var z=function(){var e=Object(a.useState)({data:null,selectedNodes:[]}),s=Object(p.a)(e,2),i=s[0],n=s[1],t=new FileReader;return console.log(i),window.state=i,Object(x.jsxs)("div",{className:"App",children:[Object(x.jsx)("form",{children:Object(x.jsxs)("div",{className:"form-group",children:[Object(x.jsx)("label",{class:"title",htmlFor:"exampleFormControlFile1",children:"Choose the file to be analysed"}),Object(x.jsx)("input",{type:"file",style:{display:"none"},className:"form-control-file file-input",id:"exampleFormControlFile1",placeholder:"Choose file",onChange:function(e){t.readAsText(e.target.files[0]),t.onload=function(){var e=Object(j.a)(f.a.mark((function e(s){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n({data:JSON.parse(s.target.result),selectedNodes:i.selectedNodes});case 1:case"end":return e.stop()}}),e)})));return function(s){return e.apply(this,arguments)}}()}}),Object(x.jsx)("label",{for:"exampleFormControlFile1",class:"custom-file-upload",children:"Upload Result File"})]})}),i.data&&Object(x.jsxs)("div",{style:{maxWidth:"900px",margin:"auto"},children:[Object(x.jsx)("h1",{children:" Nodes:"}),Object(x.jsx)(m,{children:Object(l.a)(Array(i.data.classifier.config.sizes.inputs)).map((function(e,s){return Object(x.jsx)(u.a,{variant:"outline-primary",children:s+1},s+1)}))}),Object(l.a)(Array(i.data.classifier.config.sizes.columns)).map((function(e,s){return Object(x.jsx)(m,{children:Object(l.a)(Array(i.data.classifier.config.sizes.rows)).map((function(e,a){var n=a+1+i.data.classifier.config.sizes.inputs*s+i.data.classifier.config.sizes.inputs,t=i.data.classifier.activeNodes.includes(n),c=i.data.classifier.programOutputs.includes(n),l=Object(x.jsxs)(b.a,{id:"popover-basic",children:[Object(x.jsxs)(b.a.Title,{as:"h3",children:["Node ",n]}),Object(x.jsxs)(b.a.Content,{children:[Object(x.jsxs)("p",{children:["Function Gene: ",(n-i.data.classifier.config.sizes.inputs)*i.data.classifier.config.sizes.genes_per_node+1-i.data.classifier.config.sizes.inputs,Object(x.jsx)("br",{}),"Input Genes: ",(n-i.data.classifier.config.sizes.inputs)*i.data.classifier.config.sizes.genes_per_node+2-i.data.classifier.config.sizes.inputs,", ",(n-i.data.classifier.config.sizes.inputs)*i.data.classifier.config.sizes.genes_per_node+3-i.data.classifier.config.sizes.inputs,"(Nodes )",Object(x.jsx)("br",{}),"Parameter Genes: ",(n-i.data.classifier.config.sizes.inputs)*i.data.classifier.config.sizes.genes_per_node+4-i.data.classifier.config.sizes.inputs,", ",(n-i.data.classifier.config.sizes.inputs)*i.data.classifier.config.sizes.genes_per_node+5-i.data.classifier.config.sizes.inputs]}),Object(x.jsxs)("p",{children:["Function Value: ",i.data.classifier.genes[(n-i.data.classifier.config.sizes.inputs)*i.data.classifier.config.sizes.genes_per_node-i.data.classifier.config.sizes.inputs],Object(x.jsx)("br",{}),"Input Values: ",i.data.classifier.genes[(n-i.data.classifier.config.sizes.inputs)*i.data.classifier.config.sizes.genes_per_node+1-i.data.classifier.config.sizes.genes_per_node],", ",i.data.classifier.genes[(n-i.data.classifier.config.sizes.inputs)*i.data.classifier.config.sizes.genes_per_node+2-i.data.classifier.config.sizes.genes_per_node],Object(x.jsx)("br",{}),"Parameter Values: ",i.data.classifier.genes[(n-i.data.classifier.config.sizes.inputs)*i.data.classifier.config.sizes.genes_per_node+3-i.data.classifier.config.sizes.inputs],", ",i.data.classifier.genes[(n-i.data.classifier.config.sizes.inputs)*i.data.classifier.config.sizes.genes_per_node+4-i.data.classifier.config.sizes.inputs]]})]})]});return Object(x.jsx)(g.a,{placement:"right",overlay:l,children:function(e){var s=e.ref,i=Object(d.a)(e,["ref"]);return Object(x.jsx)(u.a,Object(r.a)(Object(r.a)({ref:s},i),{},{variant:c?"warning":t?"outline-success":"outline-light",className:t?"active":"",children:n}),n)}})}))})})),Object(x.jsx)("h1",{children:"Genotype"}),Object(x.jsxs)(h.a,{striped:!0,bordered:!0,hover:!0,children:[Object(x.jsx)("thead",{children:Object(x.jsxs)("tr",{children:[Object(x.jsx)("th",{children:"Computational Node"}),Object(x.jsx)("th",{children:"Node"}),Object(x.jsx)("th",{children:"Function Gene"}),Object(l.a)(Array(i.data.classifier.config.sizes.connection_genes)).map((function(e,s){return Object(x.jsxs)("th",{children:["Connection Gene ",s+1]})})),Object(l.a)(Array(i.data.classifier.config.sizes.parameters)).map((function(e,s){return Object(x.jsxs)("th",{children:["Parameter Gene ",s+1]})}))]})}),Object(x.jsx)("tbody",{children:Object(l.a)(Array(i.data.classifier.config.sizes.nodes-i.data.classifier.config.sizes.inputs)).map((function(e,s){return Object(x.jsxs)("tr",{children:[Object(x.jsx)("td",{style:{border:"1px dashed #dee2e6",fontWeight:"bold"},children:s+1}),Object(x.jsx)("td",{style:{border:"1px dashed #dee2e6",fontWeight:"bold"},children:s+1+i.data.classifier.config.sizes.inputs}),Object(x.jsx)("td",{children:i.data.classifier.genes[s*i.data.classifier.config.sizes.genes_per_node]}),Object(l.a)(Array(i.data.classifier.config.sizes.connection_genes)).map((function(e,a){return Object(x.jsx)("td",{children:i.data.classifier.genes[s*i.data.classifier.config.sizes.genes_per_node+a+1]})})),Object(l.a)(Array(i.data.classifier.config.sizes.parameters)).map((function(e,a){return Object(x.jsx)("td",{children:i.data.classifier.genes[s*i.data.classifier.config.sizes.genes_per_node+i.data.classifier.config.sizes.connection_genes+1+a]})}))]})}))})]}),Object(x.jsx)("h1",{children:"Active Nodes:"}),Object(x.jsx)(h.a,{striped:!0,bordered:!0,hover:!0,style:{border:"none"},children:Object(x.jsx)("tbody",{children:i.data.classifier.activeNodes.map((function(e,s){return Object(x.jsx)("td",{className:"display-inline-block",children:e},s)}))})}),Object(x.jsx)("h1",{children:"Output Computational Nodes:"}),Object(x.jsx)(h.a,{striped:!0,bordered:!0,hover:!0,style:{border:"none"},children:Object(x.jsx)("tbody",{children:i.data.classifier.programOutputs.map((function(e,s){return Object(x.jsx)("td",{className:"display-inline-block",children:e},s)}))})}),Object(x.jsx)("div",{className:"list-genes",children:i.data.classifier.genes.map((function(e,s){return s%i.data.classifier.config.sizes.genes_per_node===0?Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)("br",{}),Object(x.jsx)("span",{children:Object(x.jsx)(u.a,{variant:"outline-secondary",children:e})},s)]}):Object(x.jsx)("span",{children:Object(x.jsx)(u.a,{variant:"outline-secondary",children:e})},s)}))})]})]})},_=function(e){e&&e instanceof Function&&i.e(3).then(i.bind(null,46)).then((function(s){var i=s.getCLS,a=s.getFID,n=s.getFCP,t=s.getLCP,c=s.getTTFB;i(e),a(e),n(e),t(e),c(e)}))};c.a.render(Object(x.jsx)(n.a.StrictMode,{children:Object(x.jsx)(z,{})}),document.getElementById("root")),_()}},[[36,1,2]]]);
//# sourceMappingURL=main.d73eb132.chunk.js.map