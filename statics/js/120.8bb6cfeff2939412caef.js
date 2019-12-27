(window.webpackJsonp=window.webpackJsonp||[]).push([[120],{JjD7:function(s,t,r){"use strict";r.r(t);var a=r("eVuF"),e=r.n(a),n={data:function(){return{appearance:null,geometry:null,attributes:null,vertexFormat:null,orientation:{x:0,y:0,z:0,w:1},frustum:null,origin:{lng:105,lat:35},originOutline:{lng:110,lat:35}}},mounted:function(){e.a.all([this.$refs.frustum.createPromise,this.$refs.frustumOutline.createPromise]).then((function(s){console.log("All geometries are loaded.");var t=s.reduce((function(s,t){var r=t.cesiumObject.constructor.createGeometry(t.cesiumObject),a=t.vm.$parent.modelMatrix?Cesium.BoundingSphere.transform(r.boundingSphere,t.vm.$parent.modelMatrix):r.boundingSphere;return null===s?a:Cesium.BoundingSphere.union(s,a)}),null);s[0].viewer.scene.camera.flyToBoundingSphere(t)}))},methods:{ready:function(s){var t=s.Cesium,r=s.viewer;this.viewer=r;var a=t.PerInstanceColorAppearance,e=(t.Cartesian3,t.ColorGeometryInstanceAttribute),n=t.PerspectiveFrustum;t.Quaternion;this.appearance=new a({flat:!0}),this.vertexFormat=a.VERTEX_FORMAT,this.attributes={color:new e(Math.random(),Math.random(),Math.random(),.5)},this.frustum=new n({fov:t.Math.toRadians(30),aspectRatio:1920/1080,near:1,far:5e5})},LEFT_CLICK:function(s){var t=this.viewer.scene.pick(s.position);console.log(t)}}},v=r("JFUb"),_=Object(v.a)(n,(function(){var s=this,t=s.$createElement,r=s._self._c||t;return r("section",[r("h1",[s._v("FrustumGeometry、 FrustumOutlineGeometry")]),s._v(" "),s._m(0),s._v(" "),r("h2",[s._v("示例")]),s._v(" "),r("h3",[s._v("加载视锥体")]),s._v(" "),r("h4",[s._v("预览")]),s._v(" "),r("doc-preview",[[r("div",{staticClass:"viewer"},[r("vc-viewer",{on:{ready:s.ready,LEFT_CLICK:s.LEFT_CLICK}},[r("vc-primitive",{attrs:{appearance:s.appearance}},[r("vc-instance-geometry",{attrs:{geometry:s.geometry,attributes:s.attributes},on:{"update:geometry":function(t){s.geometry=t}}},[r("vc-geometry-frustum",{ref:"frustum",attrs:{frustum:s.frustum,origin:s.origin,orientation:s.orientation,vertexFormat:s.vertexFormat}})],1)],1),s._v(" "),r("vc-primitive",{attrs:{appearance:s.appearance}},[r("vc-instance-geometry",{attrs:{attributes:s.attributes}},[r("vc-geometry-outline-frustum",{ref:"frustumOutline",attrs:{frustum:s.frustum,origin:s.originOutline,orientation:s.orientation}})],1)],1)],1)],1)]],2),s._v(" "),r("h4",[s._v("代码")]),s._v(" "),s._m(1),s._v(" "),r("h2",[s._v("属性")]),s._v(" "),s._m(2),s._v(" "),s._m(3),s._v(" "),r("hr"),s._v(" "),s._m(4),s._v(" "),s._m(5),s._v(" "),s._m(6),s._v(" "),r("h2",[s._v("事件")]),s._v(" "),s._m(7),s._v(" "),r("hr")],1)}),[function(){var s=this,t=s.$createElement,r=s._self._c||t;return r("ul",[r("li",[r("code",{pre:!0},[s._v("vc-geometry-frustum")]),s._v(" 组件用于加载视锥体。")]),s._v(" "),r("li",[r("code",{pre:!0},[s._v("vc-geometry-outline-frustum")]),s._v(" 组件用于加载视锥体轮廓。")]),s._v(" "),r("li",[s._v("需要作为 "),r("code",{pre:!0},[s._v("vc-instance-geometry")]),s._v(" 的子组件使用，可以挂载到 "),r("code",{pre:!0},[s._v("vc-primitive")]),s._v("。")])])},function(){var s=this,t=s.$createElement,r=s._self._c||t;return r("pre",{pre:!0},[r("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[r("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),r("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n  "),r("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),r("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("div")]),s._v(" "),r("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("class")]),s._v("="),r("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"viewer"')]),s._v(">")]),s._v("\n    "),r("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),r("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-viewer")]),s._v(" "),r("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("@ready")]),s._v("="),r("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"ready"')]),s._v(" "),r("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("@LEFT_CLICK")]),s._v("="),r("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"LEFT_CLICK"')]),s._v(">")]),s._v("\n      "),r("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),r("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-primitive")]),s._v(" "),r("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":appearance")]),s._v("="),r("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"appearance"')]),s._v(">")]),s._v("\n        "),r("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),r("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-instance-geometry")]),s._v(" "),r("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":geometry.sync")]),s._v("="),r("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"geometry"')]),s._v(" "),r("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":attributes")]),s._v("="),r("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"attributes"')]),s._v(">")]),s._v("\n          "),r("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),r("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-geometry-frustum")]),s._v("\n            "),r("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("ref")]),s._v("="),r("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"frustum"')]),s._v("\n            "),r("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":frustum")]),s._v("="),r("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"frustum"')]),s._v("\n            "),r("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":origin")]),s._v("="),r("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"origin"')]),s._v("\n            "),r("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":orientation")]),s._v("="),r("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"orientation"')]),s._v("\n            "),r("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":vertexFormat")]),s._v("="),r("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"vertexFormat"')]),s._v("\n          >")]),r("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),r("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-geometry-frustum")]),s._v(">")]),s._v("\n        "),r("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),r("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-instance-geometry")]),s._v(">")]),s._v("\n      "),r("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),r("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-primitive")]),s._v(">")]),s._v("\n      "),r("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),r("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-primitive")]),s._v(" "),r("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":appearance")]),s._v("="),r("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"appearance"')]),s._v(">")]),s._v("\n        "),r("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),r("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-instance-geometry")]),s._v(" "),r("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":attributes")]),s._v("="),r("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"attributes"')]),s._v(">")]),s._v("\n          "),r("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),r("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-geometry-outline-frustum")]),s._v("\n            "),r("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("ref")]),s._v("="),r("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"frustumOutline"')]),s._v("\n            "),r("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":frustum")]),s._v("="),r("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"frustum"')]),s._v("\n            "),r("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":origin")]),s._v("="),r("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"originOutline"')]),s._v("\n            "),r("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":orientation")]),s._v("="),r("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"orientation"')]),s._v("\n          >")]),r("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),r("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-geometry-outline-frustum")]),s._v(">")]),s._v("\n        "),r("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),r("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-instance-geometry")]),s._v(">")]),s._v("\n      "),r("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),r("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-primitive")]),s._v(">")]),s._v("\n    "),r("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),r("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-viewer")]),s._v(">")]),s._v("\n  "),r("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),r("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),s._v("\n"),r("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),r("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n\n"),r("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),r("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),r("span",{pre:!0,attrs:{class:"javascript"}},[s._v("\n  "),r("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("export")]),s._v(" "),r("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("default")]),s._v(" {\n    data() {\n      "),r("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" {\n        "),r("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("appearance")]),s._v(": "),r("span",{pre:!0,attrs:{class:"hljs-literal"}},[s._v("null")]),s._v(",\n        "),r("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("geometry")]),s._v(": "),r("span",{pre:!0,attrs:{class:"hljs-literal"}},[s._v("null")]),s._v(",\n        "),r("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("attributes")]),s._v(": "),r("span",{pre:!0,attrs:{class:"hljs-literal"}},[s._v("null")]),s._v(",\n        "),r("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("vertexFormat")]),s._v(": "),r("span",{pre:!0,attrs:{class:"hljs-literal"}},[s._v("null")]),s._v(",\n        "),r("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("orientation")]),s._v(": { "),r("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("x")]),s._v(": "),r("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("0")]),s._v(", "),r("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("y")]),s._v(": "),r("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("0")]),s._v(", "),r("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("z")]),s._v(": "),r("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("0")]),s._v(", "),r("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("w")]),s._v(": "),r("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("1")]),s._v(" },\n        "),r("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("frustum")]),s._v(": "),r("span",{pre:!0,attrs:{class:"hljs-literal"}},[s._v("null")]),s._v(",\n        "),r("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("origin")]),s._v(": { "),r("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("lng")]),s._v(": "),r("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("105")]),s._v(", "),r("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("lat")]),s._v(": "),r("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("35")]),s._v(" },\n        "),r("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("originOutline")]),s._v(": { "),r("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("lng")]),s._v(": "),r("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("110")]),s._v(", "),r("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("lat")]),s._v(": "),r("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("35")]),s._v(" }\n      }\n    },\n    mounted() {\n      "),r("span",{pre:!0,attrs:{class:"hljs-built_in"}},[s._v("Promise")]),s._v(".all(["),r("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".$refs.frustum.createPromise, "),r("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".$refs.frustumOutline.createPromise]).then("),r("span",{pre:!0,attrs:{class:"hljs-function"}},[s._v("("),r("span",{pre:!0,attrs:{class:"hljs-params"}},[s._v("instances")]),s._v(") =>")]),s._v(" {\n        "),r("span",{pre:!0,attrs:{class:"hljs-built_in"}},[s._v("console")]),s._v(".log("),r("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'All geometries are loaded.'")]),s._v(")\n        "),r("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" boundingSphereUnion = instances.reduce("),r("span",{pre:!0,attrs:{class:"hljs-function"}},[s._v("("),r("span",{pre:!0,attrs:{class:"hljs-params"}},[s._v("prev, cur")]),s._v(") =>")]),s._v(" {\n          "),r("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" geometry = cur.cesiumObject.constructor.createGeometry(cur.cesiumObject)\n          "),r("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" boundingSphere = cur.vm.$parent.modelMatrix\n            ? Cesium.BoundingSphere.transform(geometry.boundingSphere, cur.vm.$parent.modelMatrix)\n            : geometry.boundingSphere\n          "),r("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" prev === "),r("span",{pre:!0,attrs:{class:"hljs-literal"}},[s._v("null")]),s._v(" ? boundingSphere : Cesium.BoundingSphere.union(prev, boundingSphere)\n        }, "),r("span",{pre:!0,attrs:{class:"hljs-literal"}},[s._v("null")]),s._v(")\n        instances["),r("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("0")]),s._v("].viewer.scene.camera.flyToBoundingSphere(boundingSphereUnion)\n      })\n    },\n    "),r("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("methods")]),s._v(": {\n      ready({ Cesium, viewer }) {\n        "),r("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".viewer = viewer\n        "),r("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" { PerInstanceColorAppearance, Cartesian3, ColorGeometryInstanceAttribute, PerspectiveFrustum, Quaternion } = Cesium\n        "),r("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".appearance = "),r("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" PerInstanceColorAppearance({\n          "),r("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("flat")]),s._v(": "),r("span",{pre:!0,attrs:{class:"hljs-literal"}},[s._v("true")]),s._v("\n        })\n        "),r("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".vertexFormat = PerInstanceColorAppearance.VERTEX_FORMAT\n        "),r("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".attributes = {\n          "),r("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("color")]),s._v(": "),r("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" ColorGeometryInstanceAttribute("),r("span",{pre:!0,attrs:{class:"hljs-built_in"}},[s._v("Math")]),s._v(".random(), "),r("span",{pre:!0,attrs:{class:"hljs-built_in"}},[s._v("Math")]),s._v(".random(), "),r("span",{pre:!0,attrs:{class:"hljs-built_in"}},[s._v("Math")]),s._v(".random(), "),r("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("0.5")]),s._v(")\n        }\n        "),r("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".frustum = "),r("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" PerspectiveFrustum({\n          "),r("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("fov")]),s._v(": Cesium.Math.toRadians("),r("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("30.0")]),s._v("),\n          "),r("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("aspectRatio")]),s._v(": "),r("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("1920.0")]),s._v(" / "),r("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("1080.0")]),s._v(",\n          "),r("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("near")]),s._v(": "),r("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("1.0")]),s._v(",\n          "),r("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("far")]),s._v(": "),r("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("500000")]),s._v("\n        })\n      },\n      LEFT_CLICK(movement) {\n        "),r("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" feature = "),r("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".viewer.scene.pick(movement.position)\n        "),r("span",{pre:!0,attrs:{class:"hljs-built_in"}},[s._v("console")]),s._v(".log(feature)\n      }\n    }\n  }\n")]),r("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),r("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),s._v("\n")])])},function(){var s=this.$createElement,t=this._self._c||s;return t("h3",[t("code",{pre:!0},[this._v("vc-geometry-frustum")])])},function(){var s=this,t=s.$createElement,r=s._self._c||t;return r("table",[r("thead",[r("tr",[r("th",[s._v("属性名")]),s._v(" "),r("th",[s._v("类型")]),s._v(" "),r("th",[s._v("默认值")]),s._v(" "),r("th",[s._v("描述")])])]),s._v(" "),r("tbody",[r("tr",[r("td",[s._v("frustum")]),s._v(" "),r("td",[s._v("Object")]),s._v(" "),r("td"),s._v(" "),r("td",[r("code",{pre:!0},[s._v("optional")]),s._v(" 指定视锥体参数。")])]),s._v(" "),r("tr",[r("td",[s._v("origin")]),s._v(" "),r("td",[s._v("Object")]),s._v(" "),r("td"),s._v(" "),r("td",[r("code",{pre:!0},[s._v("optional")]),s._v(" 指定视锥体原点。")])]),s._v(" "),r("tr",[r("td",[s._v("orientation")]),s._v(" "),r("td",[s._v("Object")]),s._v(" "),r("td"),s._v(" "),r("td",[r("code",{pre:!0},[s._v("optional")]),s._v(" 指定视锥体旋转参数。")])]),s._v(" "),r("tr",[r("td",[s._v("vertexFormat")]),s._v(" "),r("td",[s._v("Object")]),s._v(" "),r("td"),s._v(" "),r("td",[r("code",{pre:!0},[s._v("optional")]),s._v(" 指定视锥体顶点渲染方式。")])])])])},function(){var s=this.$createElement,t=this._self._c||s;return t("h3",[t("code",{pre:!0},[this._v("vc-geometry-outline-frustum")])])},function(){var s=this,t=s.$createElement,r=s._self._c||t;return r("table",[r("thead",[r("tr",[r("th",[s._v("属性名")]),s._v(" "),r("th",[s._v("类型")]),s._v(" "),r("th",[s._v("默认值")]),s._v(" "),r("th",[s._v("描述")])])]),s._v(" "),r("tbody",[r("tr",[r("td",[s._v("frustum")]),s._v(" "),r("td",[s._v("Object")]),s._v(" "),r("td"),s._v(" "),r("td",[r("code",{pre:!0},[s._v("optional")]),s._v(" 指定视锥体参数。")])]),s._v(" "),r("tr",[r("td",[s._v("origin")]),s._v(" "),r("td",[s._v("Object")]),s._v(" "),r("td"),s._v(" "),r("td",[r("code",{pre:!0},[s._v("optional")]),s._v(" 指定视锥体原点。")])]),s._v(" "),r("tr",[r("td",[s._v("orientation")]),s._v(" "),r("td",[s._v("Object")]),s._v(" "),r("td"),s._v(" "),r("td",[r("code",{pre:!0},[s._v("optional")]),s._v(" 指定视锥体旋转参数。")])])])])},function(){var s=this.$createElement,t=this._self._c||s;return t("p",[this._v("参考官方文档："),t("strong",[t("a",{attrs:{href:"https://cesium.com/docs/cesiumjs-ref-doc/FrustumGeometry.html"}},[this._v("FrustumGeometry")])]),this._v("、 "),t("strong",[t("a",{attrs:{href:"https://cesium.com/docs/cesiumjs-ref-doc/FrustumOutlineGeometry.html"}},[this._v("FrustumOutlineGeometry")])])])},function(){var s=this,t=s.$createElement,r=s._self._c||t;return r("table",[r("thead",[r("tr",[r("th",[s._v("事件名")]),s._v(" "),r("th",[s._v("参数")]),s._v(" "),r("th",[s._v("描述")])])]),s._v(" "),r("tbody",[r("tr",[r("td",[s._v("ready")]),s._v(" "),r("td",[s._v("{Cesium, viewer, cesiumObject}")]),s._v(" "),r("td",[s._v("该组件渲染完毕时触发，返回 Cesium 类, viewer 实例，以及当前组件的 cesiumObject。")])])])])}],!1,null,null,null);t.default=_.exports},SLVY:function(s,t,r){s.exports=r("JjD7")}}]);
//# sourceMappingURL=120.8bb6cfeff2939412caef.js.map