(window.webpackJsonp=window.webpackJsonp||[]).push([[69],{qV1y:function(s,t,e){"use strict";e.r(t);var a=e("JFUb"),r=Object(a.a)({data:function(){return{appearance:null,geometry:{},image:"https://zouyaoji.top/vue-cesium/statics/SampleData/radarImage/1.png",rectangle:{west:102.4,south:29.5,east:106.5,north:33.5},vertexFormat:null,attributes:null,extrudedHeight:3e3,polygonHierarchy:[{lng:102.1,lat:29.5},{lng:106.2,lat:29.5},{lng:106.2,lat:33.5},{lng:102.1,lat:33.5}]}},methods:{ready:function(s){this.cesiumInstance=s;var t=this.cesiumInstance,e=t.Cesium,a=t.viewer;a.scene.globe.depthTestAgainstTerrain=!0,a.camera.setView({destination:new e.Cartesian3(-1432246.8223880068,5761224.588247942,3297281.1889481535),orientation:{heading:6.20312220367255,pitch:-.9937536846355606,roll:.002443376981836387}}),this.attributes={color:e.ColorGeometryInstanceAttribute.fromColor(new e.Color.fromBytes(64,157,253,100))}}}},(function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("section",[e("h1",[s._v("ClassificationPrimitive")]),s._v(" "),s._m(0),s._v(" "),e("h2",[s._v("Example")]),s._v(" "),s._m(1),s._v(" "),e("h4",[s._v("Preview")]),s._v(" "),e("doc-preview",[[e("div",{staticClass:"viewer"},[e("vc-viewer",{on:{ready:s.ready}},[e("vc-provider-terrain-cesium"),s._v(" "),e("vc-primitive-classification",{attrs:{asynchronous:!1}},[e("vc-instance-geometry",{attrs:{geometry:s.geometry,attributes:s.attributes},on:{"update:geometry":function(t){s.geometry=t}}},[e("vc-geometry-polygon",{attrs:{polygonHierarchy:s.polygonHierarchy,extrudedHeight:s.extrudedHeight}})],1)],1)],1)],1)]],2),s._v(" "),e("h4",[s._v("Code")]),s._v(" "),s._m(2),s._v(" "),e("h2",[s._v("Instance Properties")]),s._v(" "),s._m(3),s._v(" "),e("hr"),s._v(" "),s._m(4),s._v(" "),e("h2",[s._v("Events")]),s._v(" "),s._m(5),s._v(" "),e("hr")],1)}),[function(){var s=this.$createElement,t=this._self._c||s;return t("p",[this._v("The "),t("code",{pre:!0},[this._v("vc-primitive-classification")]),this._v(" component is used to load a classification primitive represents a volume enclosing geometry in the Scene to be highlighted. Valid geometries are BoxGeometry, CylinderGeometry, EllipsoidGeometry, PolylineVolumeGeometry, and SphereGeometry. Geometries that follow the surface of the ellipsoid, such as CircleGeometry, CorridorGeometry, EllipseGeometry, PolygonGeometry, and RectangleGeometry, are also valid if they are extruded volumes; otherwise, they will not be rendered.")])},function(){var s=this.$createElement,t=this._self._c||s;return t("h3",[this._v("Load ClassificationPrimitive with "),t("code",{pre:!0},[this._v("vc-primitive-classification")])])},function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("pre",{pre:!0},[e("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[e("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n  "),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("div")]),s._v(" "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("class")]),s._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"viewer"')]),s._v(">")]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-viewer")]),s._v(" "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("@ready")]),s._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"ready"')]),s._v(">")]),s._v("\n      "),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-provider-terrain-cesium")]),s._v(">")]),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-provider-terrain-cesium")]),s._v(">")]),s._v("\n      "),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-primitive-classification")]),s._v(" "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":asynchronous")]),s._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"false"')]),s._v(">")]),s._v("\n        "),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-instance-geometry")]),s._v(" "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":geometry.sync")]),s._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"geometry"')]),s._v(" "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":attributes")]),s._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"attributes"')]),s._v(">")]),s._v("\n          "),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-geometry-polygon")]),s._v(" "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":polygonHierarchy")]),s._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"polygonHierarchy"')]),s._v(" "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":extrudedHeight")]),s._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"extrudedHeight"')]),s._v(">")]),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-geometry-polygon")]),s._v(">")]),s._v("\n        "),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-instance-geometry")]),s._v(">")]),s._v("\n      "),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-primitive-classification")]),s._v(">")]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-viewer")]),s._v(">")]),s._v("\n  "),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n\n"),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),e("span",{pre:!0,attrs:{class:"javascript"}},[s._v("\n  "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("export")]),s._v(" "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("default")]),s._v(" {\n    data() {\n      "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" {\n        "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("appearance")]),s._v(": "),e("span",{pre:!0,attrs:{class:"hljs-literal"}},[s._v("null")]),s._v(",\n        "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("geometry")]),s._v(": {},\n        "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("image")]),s._v(": "),e("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'https://zouyaoji.top/vue-cesium/statics/SampleData/radarImage/1.png'")]),s._v(",\n        "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("rectangle")]),s._v(": { "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("west")]),s._v(": "),e("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("102.4")]),s._v(", "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("south")]),s._v(": "),e("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("29.5")]),s._v(", "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("east")]),s._v(": "),e("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("106.5")]),s._v(", "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("north")]),s._v(": "),e("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("33.5")]),s._v(" },\n        "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("vertexFormat")]),s._v(": "),e("span",{pre:!0,attrs:{class:"hljs-literal"}},[s._v("null")]),s._v(",\n        "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("attributes")]),s._v(": "),e("span",{pre:!0,attrs:{class:"hljs-literal"}},[s._v("null")]),s._v(",\n        "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("extrudedHeight")]),s._v(": "),e("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("3000")]),s._v(",\n        "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("polygonHierarchy")]),s._v(": [\n          { "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("lng")]),s._v(": "),e("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("102.1")]),s._v(", "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("lat")]),s._v(": "),e("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("29.5")]),s._v(" },\n          { "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("lng")]),s._v(": "),e("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("106.2")]),s._v(", "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("lat")]),s._v(": "),e("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("29.5")]),s._v(" },\n          { "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("lng")]),s._v(": "),e("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("106.2")]),s._v(", "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("lat")]),s._v(": "),e("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("33.5")]),s._v(" },\n          { "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("lng")]),s._v(": "),e("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("102.1")]),s._v(", "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("lat")]),s._v(": "),e("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("33.5")]),s._v(" }\n        ]\n      }\n    },\n    "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("methods")]),s._v(": {\n      ready(cesiumInstance) {\n        "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".cesiumInstance = cesiumInstance\n        "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" { Cesium, viewer } = "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".cesiumInstance\n        viewer.scene.globe.depthTestAgainstTerrain = "),e("span",{pre:!0,attrs:{class:"hljs-literal"}},[s._v("true")]),s._v("\n        viewer.camera.setView({\n          "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("destination")]),s._v(": "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" Cesium.Cartesian3("),e("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("-1432246.8223880068")]),s._v(", "),e("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("5761224.588247942")]),s._v(", "),e("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("3297281.1889481535")]),s._v("),\n          "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("orientation")]),s._v(": {\n            "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("heading")]),s._v(": "),e("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("6.20312220367255")]),s._v(",\n            "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("pitch")]),s._v(": "),e("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("-0.9937536846355606")]),s._v(",\n            "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("roll")]),s._v(": "),e("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("0.002443376981836387")]),s._v("\n          }\n        })\n        "),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".attributes = {\n          "),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("color")]),s._v(": Cesium.ColorGeometryInstanceAttribute.fromColor("),e("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" Cesium.Color.fromBytes("),e("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("64")]),s._v(", "),e("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("157")]),s._v(", "),e("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("253")]),s._v(", "),e("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("100")]),s._v("))\n        }\n      }\n    }\n  }\n")]),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),s._v("\n")])])},function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("table",[e("thead",[e("tr",[e("th",[s._v("name")]),s._v(" "),e("th",[s._v("type")]),s._v(" "),e("th",[s._v("default")]),s._v(" "),e("th",[s._v("description")])])]),s._v(" "),e("tbody",[e("tr",[e("td",[s._v("geometryInstances")]),s._v(" "),e("td",[s._v("Object|Array")]),s._v(" "),e("td"),s._v(" "),e("td",[e("code",{pre:!0},[s._v("optional")]),s._v(" The geometry instances to render.")])]),s._v(" "),e("tr",[e("td",[s._v("appearance")]),s._v(" "),e("td",[s._v("Object")]),s._v(" "),e("td"),s._v(" "),e("td",[e("code",{pre:!0},[s._v("optional")]),s._v(" The appearance used to render the primitive. Defaults to a flat PerInstanceColorAppearance when GeometryInstances have a color attribute.")])]),s._v(" "),e("tr",[e("td",[s._v("show")]),s._v(" "),e("td",[s._v("Boolean")]),s._v(" "),e("td",[e("code",{pre:!0},[s._v("true")])]),s._v(" "),e("td",[e("code",{pre:!0},[s._v("optional")]),s._v(" Determines if this primitive will be shown.")])]),s._v(" "),e("tr",[e("td",[s._v("vertexCacheOptimize")]),s._v(" "),e("td",[s._v("Boolean")]),s._v(" "),e("td",[e("code",{pre:!0},[s._v("false")])]),s._v(" "),e("td",[e("code",{pre:!0},[s._v("optional")]),s._v(" When true, geometry vertices are optimized for the pre and post-vertex-shader caches.")])]),s._v(" "),e("tr",[e("td",[s._v("interleave")]),s._v(" "),e("td",[s._v("Boolean")]),s._v(" "),e("td",[e("code",{pre:!0},[s._v("false")])]),s._v(" "),e("td",[e("code",{pre:!0},[s._v("optional")]),s._v(" When true, geometry vertex attributes are interleaved, which can slightly improve rendering performance but increases load time.")])]),s._v(" "),e("tr",[e("td",[s._v("compressVertices")]),s._v(" "),e("td",[s._v("Boolean")]),s._v(" "),e("td",[e("code",{pre:!0},[s._v("true")])]),s._v(" "),e("td",[e("code",{pre:!0},[s._v("optional")]),s._v(" When true, the geometry vertices are compressed, which will save memory.")])]),s._v(" "),e("tr",[e("td",[s._v("releaseGeometryInstances")]),s._v(" "),e("td",[s._v("Boolean")]),s._v(" "),e("td",[e("code",{pre:!0},[s._v("true")])]),s._v(" "),e("td",[e("code",{pre:!0},[s._v("optional")]),s._v(" When true, the primitive does not keep a reference to the input geometryInstances to save memory.")])]),s._v(" "),e("tr",[e("td",[s._v("allowPicking")]),s._v(" "),e("td",[s._v("Boolean")]),s._v(" "),e("td",[e("code",{pre:!0},[s._v("true")])]),s._v(" "),e("td",[e("code",{pre:!0},[s._v("optional")]),s._v(" When true, each geometry instance will only be pickable with Scene#pick. When false, GPU memory is saved.")])]),s._v(" "),e("tr",[e("td",[s._v("asynchronous")]),s._v(" "),e("td",[s._v("Boolean")]),s._v(" "),e("td",[e("code",{pre:!0},[s._v("true")])]),s._v(" "),e("td",[e("code",{pre:!0},[s._v("optional")]),s._v(" Determines if the primitive will be created asynchronously or block until ready.")])]),s._v(" "),e("tr",[e("td",[s._v("classificationType")]),s._v(" "),e("td",[s._v("Number")]),s._v(" "),e("td",[e("code",{pre:!0},[s._v("2")])]),s._v(" "),e("td",[e("code",{pre:!0},[s._v("optional")]),s._v("Determines whether terrain, 3D Tiles or both will be classified. "),e("strong",[s._v("TERRAIN: 0, CESIUM_3D_TILE: 1, BOTH: 2")])])]),s._v(" "),e("tr",[e("td",[s._v("debugShowBoundingVolume")]),s._v(" "),e("td",[s._v("Boolean")]),s._v(" "),e("td",[e("code",{pre:!0},[s._v("false")])]),s._v(" "),e("td",[e("code",{pre:!0},[s._v("optional")]),s._v(" For debugging only. Determines if this primitive's commands' bounding spheres are shown.")])]),s._v(" "),e("tr",[e("td",[s._v("debugShowShadowVolume")]),s._v(" "),e("td",[s._v("Boolean")]),s._v(" "),e("td",[e("code",{pre:!0},[s._v("false")])]),s._v(" "),e("td",[e("code",{pre:!0},[s._v("optional")]),s._v(" For debugging only. Determines if the shadow volume for each geometry in the primitive is drawn. Must be true on creation for the volumes to be created before the geometry is released or options.releaseGeometryInstance must be false.")])])])])},function(){var s=this.$createElement,t=this._self._c||s;return t("p",[this._v("Refer to the official document: "),t("strong",[t("a",{attrs:{href:"https://cesium.com/docs/cesiumjs-ref-doc/ClassificationPrimitive.html"}},[this._v("ClassificationPrimitive")])])])},function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("table",[e("thead",[e("tr",[e("th",[s._v("name")]),s._v(" "),e("th",[s._v("parameter")]),s._v(" "),e("th",[s._v("description")])])]),s._v(" "),e("tbody",[e("tr",[e("td",[s._v("ready")]),s._v(" "),e("td",[s._v("{Cesium, viewer, cesiumObject}")]),s._v(" "),e("td",[s._v("Triggers when the component is ready. It returns a core class of Cesium, a viewer instance, and the cesiumObject.")])])])])}],!1,null,null,null);t.default=r.exports},tv5H:function(s,t,e){s.exports=e("qV1y")}}]);
//# sourceMappingURL=69.e050439c7e22f6f85295.js.map