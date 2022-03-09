require([
      "esri/WebScene",
      "esri/views/SceneView",
      "esri/Camera",
      "esri/widgets/Home",
      "esri/widgets/Legend",
      "esri/widgets/LayerList",
      "dojo/domReady!"
 ], function(WebScene, SceneView, Camera, Home, Legend, LayerList) 
      {
      /*var map = new Map({
        basemap: "streets",
        ground: "world-elevation"
      });*/
      var scene = new WebScene({
        portalItem:{
         id:"27d297fb861241f4b0f2da075d51e56d" 
        }
      });
      
      var home_btn = new Camera({
       position: [
           -87.623177,
          41.881832,
          2500// elevation in meters
        ],
        tilt:0,
        heading: 0
      })

     var camera = new Camera({
       position: [
           -87.619392,
          41.882702,
          700// elevation in meters
        ],
        tilt:0,
        heading: 0
      })
      
      var camera2 = new Camera({
       position: [
           -87.622954,
          41.887776,
          700// elevation in meters
        ],
        tilt:0,
        heading: 0
      })
      
            var camera3 = new Camera({
       position: [
           -87.222019,
          43.450100,
          1000// elevation in meters
        ],
        tilt: 75,
        heading: -50
      })

      var view = new SceneView({
        container: "viewDiv",
        map: scene,
        viewingMode:"global",
        camera: home_btn,
        environment: {
            lighting: {
              date: new Date(),
              directShadowsEnabled: true,
              // don't update the view time when user pans.
              // The clock widget drives the time
              cameraTrackingEnabled: false
            }
        },
    });
    
    var homeBtn = new Home({
        view: view
      });

      // Add the home button to the top left corner of the view
    view.ui.add(homeBtn, "top-left");

view.when(function() {
	
          // get the first layer in the collection of operational layers in the WebMap
          // when the resources in the MapView have loaded.
        var featureLayer = scene.layers.getItemAt(1);

        var legend = new Legend({
          view: view,
          layerInfos: [{
            layer: featureLayer,
            title: "Recycling Drop-Off Sites"
          }]
        });
    
    var layerList = new LayerList({
  view: view
});

view.ui.add(legend, "top-right");
view.ui.add(layerList, "bottom-right");
    
    [milpark,chiriv,lakemi].forEach(function(button) {
      button.style.display = 'flex';
      view.ui.add(button, 'bottom-left');
    });

    milpark.addEventListener('click', function() {
      // reuse the default camera position already established in the homeBtn
      view.goTo({
        target:camera
      });
    });
    
    chiriv.addEventListener('click', function() {
      // reuse the default camera position already established in the homeBtn
      view.goTo({
        target:camera2
      });
    });
    
   
   lakemi.addEventListener('click', function() {
      // reuse the default camera position already established in the homeBtn
      view.goTo({
        target:camera3
      });
    });
  });
});