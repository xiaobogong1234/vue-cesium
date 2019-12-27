(window.webpackJsonp=window.webpackJsonp||[]).push([[95],{"8J93":function(t,s,e){t.exports=e("kY2Y")},kY2Y:function(t,s,e){"use strict";e.r(s);var v=e("JFUb"),a=Object(v.a)({data:function(){return{show:!0,options:{stroke:"red"}}},methods:{ready:function(t){t.Cesium,t.viewer},subReady:function(t){t.viewer.zoomTo(t.cesiumObject)}}},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("section",[e("h1",[t._v("GeoJsonDataSource")]),t._v(" "),t._m(0),t._v(" "),e("h2",[t._v("示例")]),t._v(" "),e("h3",[t._v("加载 GeoJSON 格式数据源")]),t._v(" "),e("h4",[t._v("预览")]),t._v(" "),e("doc-preview",[[e("div",{staticClass:"viewer"},[e("vc-viewer",{on:{ready:t.ready}},[e("vc-datasource-geojson",{ref:"ds",attrs:{data:"./statics/SampleData/lineData/streamline.json",show:t.show,options:t.options},on:{ready:t.subReady}})],1)],1)]],2),t._v(" "),e("h4",[t._v("代码")]),t._v(" "),t._m(1),t._v(" "),e("h2",[t._v("属性")]),t._v(" "),t._m(2),t._v(" "),e("hr"),t._v(" "),t._m(3),t._v(" "),e("h2",[t._v("事件")]),t._v(" "),t._m(4),t._v(" "),e("hr")],1)}),[function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("code",{pre:!0},[this._v("vc-datasource-geojson")]),this._v(" 组件用于加载 "),s("a",{attrs:{href:"https://geojson.org/"}},[this._v("GeoJSON")]),this._v(" 和 "),s("a",{attrs:{href:"https://github.com/topojson/topojson"}},[this._v("TopoJSON")]),this._v(" 格式的数据。")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("pre",{pre:!0},[e("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[e("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("template")]),t._v(">")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("div")]),t._v(" "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("class")]),t._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"viewer"')]),t._v(">")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("vc-viewer")]),t._v(" "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("@ready")]),t._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"ready"')]),t._v(">")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("vc-datasource-geojson")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("data")]),t._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"./statics/SampleData/lineData/streamline.json"')]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("@ready")]),t._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"subReady"')]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v(":show")]),t._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"show"')]),t._v("\n      >")]),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("vc-datasource-geojson")]),t._v(">")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("vc-viewer")]),t._v(">")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("div")]),t._v(">")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("template")]),t._v(">")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("script")]),t._v(">")]),e("span",{pre:!0,attrs:{class:"javascript"}},[t._v("\n  "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("export")]),t._v(" "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("default")]),t._v(" {\n    data() {\n      "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("return")]),t._v(" {\n        "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("show")]),t._v(": "),e("span",{pre:!0,attrs:{class:"hljs-literal"}},[t._v("true")]),t._v("\n      }\n    },\n    "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("methods")]),t._v(": {\n      ready(cesiumInstance) {\n        "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("const")]),t._v(" { Cesium, viewer } = cesiumInstance\n      },\n      subReady(cesiumInstance) {\n        cesiumInstance.viewer.zoomTo(cesiumInstance.cesiumObject)\n      }\n    }\n  }\n")]),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("script")]),t._v(">")]),t._v("\n")])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("table",[e("thead",[e("tr",[e("th",[t._v("属性名")]),t._v(" "),e("th",[t._v("类型")]),t._v(" "),e("th",[t._v("默认值")]),t._v(" "),e("th",[t._v("描述")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("data")]),t._v(" "),e("td",[t._v("String|Object")]),t._v(" "),e("td"),t._v(" "),e("td",[e("code",{pre:!0},[t._v("required")]),t._v(" 指定要加载的 GeoJSON 或者 TopoJSON 的 url。")])]),t._v(" "),e("tr",[e("td",[t._v("show")]),t._v(" "),e("td",[t._v("Boolean")]),t._v(" "),e("td",[e("code",{pre:!0},[t._v("true")])]),t._v(" "),e("td",[e("code",{pre:!0},[t._v("optional")]),t._v(" 指定数据源是否显示。")])]),t._v(" "),e("tr",[e("td",[t._v("options")]),t._v(" "),e("td",[t._v("Object")]),t._v(" "),e("td"),t._v(" "),e("td",[e("code",{pre:!0},[t._v("optional")]),t._v(" 指定以下属性：")])]),t._v(" "),e("tr",[e("td",[t._v("sourceUri")]),t._v(" "),e("td",[t._v("String")]),t._v(" "),e("td"),t._v(" "),e("td")]),t._v(" "),e("tr",[e("td",[t._v("markerSize")]),t._v(" "),e("td",[t._v("Number")]),t._v(" "),e("td"),t._v(" "),e("td")]),t._v(" "),e("tr",[e("td",[t._v("markerSymbol")]),t._v(" "),e("td",[t._v("String")]),t._v(" "),e("td"),t._v(" "),e("td")]),t._v(" "),e("tr",[e("td",[t._v("markerColor")]),t._v(" "),e("td",[t._v("String|Object|Array")]),t._v(" "),e("td"),t._v(" "),e("td")]),t._v(" "),e("tr",[e("td",[t._v("stroke")]),t._v(" "),e("td",[t._v("String|Object|Array")]),t._v(" "),e("td"),t._v(" "),e("td")]),t._v(" "),e("tr",[e("td",[t._v("strokeWidth")]),t._v(" "),e("td",[t._v("Number")]),t._v(" "),e("td"),t._v(" "),e("td")]),t._v(" "),e("tr",[e("td",[t._v("fill")]),t._v(" "),e("td",[t._v("String|Object|Array")]),t._v(" "),e("td"),t._v(" "),e("td")]),t._v(" "),e("tr",[e("td",[t._v("clampToGround")]),t._v(" "),e("td",[t._v("Boolean")]),t._v(" "),e("td",[e("code",{pre:!0},[t._v("false")])]),t._v(" "),e("td")]),t._v(" "),e("tr",[e("td",[t._v("credit")]),t._v(" "),e("td",[t._v("String|Object")]),t._v(" "),e("td"),t._v(" "),e("td")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("参考官方文档： "),s("strong",[s("a",{attrs:{href:"https://cesium.com/docs/cesiumjs-ref-doc/GeoJsonDataSource.html"}},[this._v("GeoJsonDataSource")])])])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("table",[e("thead",[e("tr",[e("th",[t._v("事件名")]),t._v(" "),e("th",[t._v("参数")]),t._v(" "),e("th",[t._v("描述")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("ready")]),t._v(" "),e("td",[t._v("{Cesium, viewer, cesiumObject}")]),t._v(" "),e("td",[t._v("该组件渲染完毕时触发，返回 Cesium 类, viewer 实例，以及当前组件的 cesiumObject。")])]),t._v(" "),e("tr",[e("td",[t._v("changedEvent")]),t._v(" "),e("td"),t._v(" "),e("td",[t._v("数据源改变时触发。")])]),t._v(" "),e("tr",[e("td",[t._v("errorEvent")]),t._v(" "),e("td"),t._v(" "),e("td",[t._v("数据源发生错误时触发。")])]),t._v(" "),e("tr",[e("td",[t._v("loadingEvent")]),t._v(" "),e("td"),t._v(" "),e("td",[t._v("数据源开始或结束加载时触发。")])]),t._v(" "),e("tr",[e("td",[t._v("clusterEvent")]),t._v(" "),e("td",[t._v("(clusteredEntities, cluster)")]),t._v(" "),e("td",[t._v("数据源聚合事件。")])]),t._v(" "),e("tr",[e("td",[t._v("collectionChanged")]),t._v(" "),e("td",[t._v("(collection, added, removed, changed)")]),t._v(" "),e("td",[t._v("数据源实体集合改变时触发。")])])])])}],!1,null,null,null);s.default=a.exports}}]);
//# sourceMappingURL=95.8aaf46c07cabadfb7c1b.js.map