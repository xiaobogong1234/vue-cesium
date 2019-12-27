(window.webpackJsonp=window.webpackJsonp||[]).push([[147],{"Gkq+":function(s,t,a){s.exports=a("OI8l")},OI8l:function(s,t,a){"use strict";a.r(t);var r=a("JFUb"),e=Object(r.a)({data:function(){return{layer1:"img",layer2:"cia",url:"https://{s}.tianditu.gov.cn/img_c/wmts?service=WMTS&version=1.0.0&request=GetTile&tilematrix={TileMatrix}&layer=img&style={style}&tilerow={TileRow}&tilecol={TileCol}&tilematrixset={TileMatrixSet}&format=tiles",urlText:"https://{s}.tianditu.gov.cn/cia_c/wmts?service=WMTS&version=1.0.0&request=GetTile&tilematrix={TileMatrix}&layer=cia&style={style}&tilerow={TileRow}&tilecol={TileCol}&tilematrixset={TileMatrixSet}&format=tiles",style:"default",tileMatrixSetID:"c",tileMatrixLabels:["1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19"],credit:"天地图WMTS服务",subdomains:["t0","t1","t2","t3","t4","t5","t6","t7"],tilingScheme:{},options:[{label:"image",value:"https://{s}.tianditu.gov.cn/img_c/wmts?service=WMTS&version=1.0.0&request=GetTile&tilematrix={TileMatrix}&layer=img&style={style}&tilerow={TileRow}&tilecol={TileCol}&tilematrixset={TileMatrixSet}&format=tiles"},{label:"vector",value:"https://{s}.tianditu.gov.cn/vec_c/wmts?service=WMTS&version=1.0.0&request=GetTile&tilematrix={TileMatrix}&layer=vec&style={style}&tilerow={TileRow}&tilecol={TileCol}&tilematrixset={TileMatrixSet}&format=tiles"}],alpha:1,brightness:1,contrast:1,token:"436ce7e50d27eede2f2929307e6b33c0"}},methods:{ready:function(s){var t=s.Cesium;s.viewer;this.cesiumInstance=s,this.tilingScheme=new t.GeographicTilingScheme},layerAdded:function(){this.$refs.layerText.imageryLayer&&this.cesiumInstance.viewer.imageryLayers.raiseToTop(this.$refs.layerText.imageryLayer)}}},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("section",[a("h1",[s._v("WebMapTileServiceImageryProvider")]),s._v(" "),s._m(0),s._v(" "),a("h2",[s._v("示例")]),s._v(" "),a("h3",[s._v("加载 WMTS 影像服务图层")]),s._v(" "),a("h4",[s._v("预览")]),s._v(" "),a("doc-preview",[[a("div",{staticClass:"viewer"},[a("vc-viewer",{on:{ready:s.ready,layerAdded:s.layerAdded}},[a("vc-layer-imagery",{ref:"layerText",attrs:{alpha:s.alpha,brightness:s.brightness,contrast:s.contrast}},[a("vc-provider-imagery-wmts",{attrs:{url:s.urlText,wmtsStyle:s.style,tileMatrixSetID:s.tileMatrixSetID,credit:s.credit,subdomains:s.subdomains,tilingScheme:s.tilingScheme,tileMatrixLabels:s.tileMatrixLabels,token:s.token,layer:s.layer2}})],1),s._v(" "),a("vc-layer-imagery",{attrs:{alpha:s.alpha,brightness:s.brightness,contrast:s.contrast}},[a("vc-provider-imagery-wmts",{attrs:{url:s.url,wmtsStyle:s.style,tileMatrixSetID:s.tileMatrixSetID,credit:s.credit,subdomains:s.subdomains,tilingScheme:s.tilingScheme,tileMatrixLabels:s.tileMatrixLabels,token:s.token,layer:s.layer1}})],1)],1),s._v(" "),a("div",{staticClass:"demo-tool"},[a("span",[s._v("透明度")]),s._v(" "),a("vue-slider",{attrs:{min:0,max:1,interval:.01},model:{value:s.alpha,callback:function(t){s.alpha=t},expression:"alpha"}}),s._v(" "),a("span",[s._v("亮度")]),s._v(" "),a("vue-slider",{attrs:{min:0,max:3,interval:.01},model:{value:s.brightness,callback:function(t){s.brightness=t},expression:"brightness"}}),s._v(" "),a("span",[s._v("对比度")]),s._v(" "),a("vue-slider",{attrs:{min:0,max:3,interval:.01},model:{value:s.contrast,callback:function(t){s.contrast=t},expression:"contrast"}}),s._v(" "),a("span",[s._v("切换服务")]),s._v(" "),a("md-select",{attrs:{placeholder:"请选择服务"},model:{value:s.url,callback:function(t){s.url=t},expression:"url"}},s._l(s.options,(function(t){return a("md-option",{key:t.value,attrs:{value:t.value}},[s._v("\n            "+s._s(t.label)+"\n          ")])})),1)],1)],1)]],2),s._v(" "),a("h4",[s._v("代码")]),s._v(" "),s._m(1),s._v(" "),a("h2",[s._v("属性")]),s._v(" "),s._m(2),s._v(" "),a("hr"),s._v(" "),s._m(3),s._v(" "),a("h2",[s._v("事件")]),s._v(" "),s._m(4),s._v(" "),a("hr")],1)}),[function(){var s=this.$createElement,t=this._self._c||s;return t("p",[t("code",{pre:!0},[this._v("vc-provider-imagery-wmts")]),this._v(" 组件用于加载 WMTS(1.0.0) 影像服务图层。")])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("pre",{pre:!0},[a("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("div")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("class")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"viewer"')]),s._v(">")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-viewer")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("@ready")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"ready"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("@layerAdded")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"layerAdded"')]),s._v(">")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-layer-imagery")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("ref")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"layerText"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":alpha")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"alpha"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":brightness")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"brightness"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":contrast")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"contrast"')]),s._v(">")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-provider-imagery-wmts")]),s._v("\n          "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":url")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"urlText"')]),s._v("\n          "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":wmtsStyle")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"style"')]),s._v("\n          "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":tileMatrixSetID")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"tileMatrixSetID"')]),s._v("\n          "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":credit")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"credit"')]),s._v("\n          "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":subdomains")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"subdomains"')]),s._v("\n          "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":tilingScheme")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"tilingScheme"')]),s._v("\n          "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":tileMatrixLabels")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"tileMatrixLabels"')]),s._v("\n          "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":token")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"token"')]),s._v("\n          "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":layer")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"layer2"')]),s._v("\n        >")]),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-provider-imagery-wmts")]),s._v(">")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-layer-imagery")]),s._v(">")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-layer-imagery")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":alpha")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"alpha"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":brightness")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"brightness"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":contrast")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"contrast"')]),s._v(">")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-provider-imagery-wmts")]),s._v("\n          "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":url")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"url"')]),s._v("\n          "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":wmtsStyle")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"style"')]),s._v("\n          "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":tileMatrixSetID")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"tileMatrixSetID"')]),s._v("\n          "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":credit")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"credit"')]),s._v("\n          "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":subdomains")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"subdomains"')]),s._v("\n          "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":tilingScheme")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"tilingScheme"')]),s._v("\n          "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":tileMatrixLabels")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"tileMatrixLabels"')]),s._v("\n          "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":token")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"token"')]),s._v("\n          "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":layer")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"layer1"')]),s._v("\n        >")]),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-provider-imagery-wmts")]),s._v(">")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-layer-imagery")]),s._v(">")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-viewer")]),s._v(">")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("div")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("class")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"demo-tool"')]),s._v(">")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("span")]),s._v(">")]),s._v("透明度"),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("span")]),s._v(">")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vue-slider")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("v-model")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"alpha"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":min")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"0"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":max")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"1"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":interval")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"0.01"')]),s._v(">")]),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vue-slider")]),s._v(">")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("span")]),s._v(">")]),s._v("亮度"),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("span")]),s._v(">")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vue-slider")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("v-model")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"brightness"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":min")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"0"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":max")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"3"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":interval")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"0.01"')]),s._v(">")]),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vue-slider")]),s._v(">")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("span")]),s._v(">")]),s._v("对比度"),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("span")]),s._v(">")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vue-slider")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("v-model")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"contrast"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":min")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"0"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":max")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"3"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":interval")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"0.01"')]),s._v(">")]),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vue-slider")]),s._v(">")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("span")]),s._v(">")]),s._v("切换服务"),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("span")]),s._v(">")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("md-select")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("v-model")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"url"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("placeholder")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"请选择服务"')]),s._v(">")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("md-option")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("v-for")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"item in options"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":key")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"item.value"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":value")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"item.value"')]),s._v(">")]),s._v("\n          {{item.label}}\n        "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("md-option")]),s._v(">")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("md-select")]),s._v(">")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),a("span",{pre:!0,attrs:{class:"javascript"}},[s._v("\n  "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("export")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("default")]),s._v(" {\n    data() {\n      "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" {\n        "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("layer1")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'img'")]),s._v(",\n        "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("layer2")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'cia'")]),s._v(",\n        "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("url")]),s._v(":\n          "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'https://{s}.tianditu.gov.cn/img_c/wmts?service=WMTS&version=1.0.0&request=GetTile&tilematrix={TileMatrix}&layer=img&style={style}&tilerow={TileRow}&tilecol={TileCol}&tilematrixset={TileMatrixSet}&format=tiles'")]),s._v(",\n        "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("urlText")]),s._v(":\n          "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'https://{s}.tianditu.gov.cn/cia_c/wmts?service=WMTS&version=1.0.0&request=GetTile&tilematrix={TileMatrix}&layer=cia&style={style}&tilerow={TileRow}&tilecol={TileCol}&tilematrixset={TileMatrixSet}&format=tiles'")]),s._v(",\n        "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("style")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'default'")]),s._v(",\n        "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("tileMatrixSetID")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'c'")]),s._v(",\n        "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("tileMatrixLabels")]),s._v(": [\n          "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'1'")]),s._v(",\n          "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'2'")]),s._v(",\n          "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'3'")]),s._v(",\n          "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'4'")]),s._v(",\n          "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'5'")]),s._v(",\n          "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'6'")]),s._v(",\n          "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'7'")]),s._v(",\n          "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'8'")]),s._v(",\n          "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'9'")]),s._v(",\n          "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'10'")]),s._v(",\n          "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'11'")]),s._v(",\n          "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'12'")]),s._v(",\n          "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'13'")]),s._v(",\n          "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'14'")]),s._v(",\n          "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'15'")]),s._v(",\n          "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'16'")]),s._v(",\n          "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'17'")]),s._v(",\n          "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'18'")]),s._v(",\n          "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'19'")]),s._v("\n        ],\n        "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("credit")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'天地图WMTS服务'")]),s._v(",\n        "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("subdomains")]),s._v(": ["),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'t0'")]),s._v(", "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'t1'")]),s._v(", "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'t2'")]),s._v(", "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'t3'")]),s._v(", "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'t4'")]),s._v(", "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'t5'")]),s._v(", "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'t6'")]),s._v(", "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'t7'")]),s._v("],\n        "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("tilingScheme")]),s._v(": {},\n        "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("options")]),s._v(": [\n          {\n            "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("label")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'image'")]),s._v(",\n            "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(":\n              "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'https://{s}.tianditu.gov.cn/img_c/wmts?service=WMTS&version=1.0.0&request=GetTile&tilematrix={TileMatrix}&layer=img&style={style}&tilerow={TileRow}&tilecol={TileCol}&tilematrixset={TileMatrixSet}&format=tiles'")]),s._v("\n          },\n          {\n            "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("label")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'vector'")]),s._v(",\n            "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("value")]),s._v(":\n              "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'https://{s}.tianditu.gov.cn/vec_c/wmts?service=WMTS&version=1.0.0&request=GetTile&tilematrix={TileMatrix}&layer=vec&style={style}&tilerow={TileRow}&tilecol={TileCol}&tilematrixset={TileMatrixSet}&format=tiles'")]),s._v("\n          }\n        ],\n        "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("alpha")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("1")]),s._v(",\n        "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("brightness")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("1")]),s._v(",\n        "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("contrast")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("1")]),s._v(",\n        "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("token")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'436ce7e50d27eede2f2929307e6b33c0'")]),s._v("\n      }\n    },\n    "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("methods")]),s._v(": {\n      ready(cesiumInstance) {\n        "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" { Cesium, viewer } = cesiumInstance\n        "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".cesiumInstance = cesiumInstance\n        "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".tilingScheme = "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" Cesium.GeographicTilingScheme()\n      },\n      layerAdded() {\n        "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("if")]),s._v(" ("),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".$refs.layerText.imageryLayer) {\n          "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" { viewer } = "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".cesiumInstance\n          viewer.imageryLayers.raiseToTop("),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".$refs.layerText.imageryLayer)\n        }\n      }\n    }\n  }\n")]),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),s._v("\n")])])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("table",[a("thead",[a("tr",[a("th",[s._v("属性名")]),s._v(" "),a("th",[s._v("类型")]),s._v(" "),a("th",[s._v("默认值")]),s._v(" "),a("th",[s._v("描述")])])]),s._v(" "),a("tbody",[a("tr",[a("td",[s._v("url")]),s._v(" "),a("td",[s._v("String|Object")]),s._v(" "),a("td"),s._v(" "),a("td",[a("code",{pre:!0},[s._v("required")]),s._v(" 指定 wmts 服务地址。")])]),s._v(" "),a("tr",[a("td",[s._v("format")]),s._v(" "),a("td",[s._v("String")]),s._v(" "),a("td",[a("code",{pre:!0},[s._v("'image/jpeg'")])]),s._v(" "),a("td",[a("code",{pre:!0},[s._v("optional")]),s._v(" 指定服务的 MIME 类型。")])]),s._v(" "),a("tr",[a("td",[s._v("layer")]),s._v(" "),a("td",[s._v("String")]),s._v(" "),a("td"),s._v(" "),a("td",[a("code",{pre:!0},[s._v("required")]),s._v(" 指定 WMTS 请求图层名称。")])]),s._v(" "),a("tr",[a("td",[s._v("wmtsStyle")]),s._v(" "),a("td",[s._v("String")]),s._v(" "),a("td"),s._v(" "),a("td",[a("code",{pre:!0},[s._v("required")]),s._v(" 指定 WMTS 请求样式名称。")])]),s._v(" "),a("tr",[a("td",[s._v("tileMatrixSetID")]),s._v(" "),a("td",[s._v("String")]),s._v(" "),a("td"),s._v(" "),a("td",[a("code",{pre:!0},[s._v("required")]),s._v(" 指定 WMTS 请求的 TileMatrixSet 的标识符。")])]),s._v(" "),a("tr",[a("td",[s._v("tileMatrixLabels")]),s._v(" "),a("td",[s._v("Array")]),s._v(" "),a("td"),s._v(" "),a("td",[a("code",{pre:!0},[s._v("optional")]),s._v(" 指定 TileMatrix 中用于 WMTS 请求的标识符列表，每个 TileMatrix 级别一个。")])]),s._v(" "),a("tr",[a("td",[s._v("clock")]),s._v(" "),a("td",[s._v("Clock")]),s._v(" "),a("td"),s._v(" "),a("td",[a("code",{pre:!0},[s._v("optional")]),s._v(" 确定时间维度值时使用的 Clock 实例。 指定 options.times 时必需。")])]),s._v(" "),a("tr",[a("td",[s._v("times")]),s._v(" "),a("td",[s._v("TimeIntervalCollection")]),s._v(" "),a("td"),s._v(" "),a("td",[a("code",{pre:!0},[s._v("optional")]),s._v(" TimeIntervalCollection，其 data 属性是一个包含时间动态维度及其值的对象。")])]),s._v(" "),a("tr",[a("td",[s._v("dimensions")]),s._v(" "),a("td",[s._v("Object")]),s._v(" "),a("td"),s._v(" "),a("td",[a("code",{pre:!0},[s._v("optional")]),s._v(" 指定包含静态尺寸及其值的对象。")])]),s._v(" "),a("tr",[a("td",[s._v("tileWidth")]),s._v(" "),a("td",[s._v("Number")]),s._v(" "),a("td",[a("code",{pre:!0},[s._v("256")])]),s._v(" "),a("td",[a("code",{pre:!0},[s._v("optional")]),s._v(" 像元宽度。")])]),s._v(" "),a("tr",[a("td",[s._v("tileHeight")]),s._v(" "),a("td",[s._v("Number")]),s._v(" "),a("td",[a("code",{pre:!0},[s._v("256")])]),s._v(" "),a("td",[a("code",{pre:!0},[s._v("optional")]),s._v(" 像元高度。")])]),s._v(" "),a("tr",[a("td",[s._v("tilingScheme")]),s._v(" "),a("td",[s._v("TilingScheme")]),s._v(" "),a("td"),s._v(" "),a("td",[a("code",{pre:!0},[s._v("optional")]),s._v(" 指定切片方案。")])]),s._v(" "),a("tr",[a("td",[s._v("rectangle")]),s._v(" "),a("td",[s._v("Object")]),s._v(" "),a("td"),s._v(" "),a("td",[a("code",{pre:!0},[s._v("optional")]),s._v(" 图层的矩形范围,此矩形限制了影像可见范围。 "),a("strong",[s._v("结构：{ west: number, south: number, east: number, north: number }")])])]),s._v(" "),a("tr",[a("td",[s._v("minimumLevel")]),s._v(" "),a("td",[s._v("Number")]),s._v(" "),a("td",[a("code",{pre:!0},[s._v("0")])]),s._v(" "),a("td",[a("code",{pre:!0},[s._v("optional")]),s._v(" 图层可以显示的最小层级。")])]),s._v(" "),a("tr",[a("td",[s._v("maximumLevel")]),s._v(" "),a("td",[s._v("Number")]),s._v(" "),a("td"),s._v(" "),a("td",[a("code",{pre:!0},[s._v("optional")]),s._v(" 图层可以显示的最大层级，undefined 表示没有限制。")])]),s._v(" "),a("tr",[a("td",[s._v("ellipsoid")]),s._v(" "),a("td",[s._v("Ellipsoid")]),s._v(" "),a("td"),s._v(" "),a("td",[a("code",{pre:!0},[s._v("optional")]),s._v(" 参考椭球体，没指定默认 WGS84 椭球。")])]),s._v(" "),a("tr",[a("td",[s._v("credit")]),s._v(" "),a("td",[s._v("Credit| String")]),s._v(" "),a("td"),s._v(" "),a("td",[a("code",{pre:!0},[s._v("optional")]),s._v(" 数据源描述信息。")])]),s._v(" "),a("tr",[a("td",[s._v("subdomains")]),s._v(" "),a("td",[s._v("String | Array")]),s._v(" "),a("td",[a("code",{pre:!0},[s._v("'abc'")])]),s._v(" "),a("td",[a("code",{pre:!0},[s._v("optional")]),s._v(" 指定 URL 模板中{s}占位符的子域。 如果此参数是单个字符串，则字符串中的每个字符都是子域。 如果是数组，则数组中的每个元素都是子域。")])]),s._v(" "),a("tr",[a("td",[s._v("token")]),s._v(" "),a("td",[s._v("String")]),s._v(" "),a("td"),s._v(" "),a("td",[a("code",{pre:!0},[s._v("optional")]),s._v(" 指定服务 token。 目前只针对天地图服务。")])])])])},function(){var s=this.$createElement,t=this._self._c||s;return t("ul",[t("li",[this._v("参考官方文档： "),t("strong",[t("a",{attrs:{href:"https://cesium.com/docs/cesiumjs-ref-doc/WebMapServiceImageryProvider.html"}},[this._v("WebMapTileServiceImageryProvider")])])])])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("table",[a("thead",[a("tr",[a("th",[s._v("事件名")]),s._v(" "),a("th",[s._v("参数")]),s._v(" "),a("th",[s._v("描述")])])]),s._v(" "),a("tbody",[a("tr",[a("td",[s._v("ready")]),s._v(" "),a("td",[s._v("{Cesium, viewer, cesiumObject}")]),s._v(" "),a("td",[s._v("该组件渲染完毕时触发，返回 Cesium 类, viewer 实例，以及当前组件的 cesiumObject。")])]),s._v(" "),a("tr",[a("td",[s._v("errorEvent")]),s._v(" "),a("td",[s._v("TileProviderError")]),s._v(" "),a("td",[s._v("当图层提供者发生异步错误时触发, 返回一个 TileProviderError 实例。")])]),s._v(" "),a("tr",[a("td",[s._v("readyPromise")]),s._v(" "),a("td",[s._v("ImageryProvider")]),s._v(" "),a("td",[s._v("当图层提供者可用时触发, 返回 ImageryProvider 实例。")])])])])}],!1,null,null,null);t.default=e.exports}}]);
//# sourceMappingURL=147.3c87355a04cf1087f430.js.map