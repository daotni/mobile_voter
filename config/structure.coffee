# Read more about app structure at http://docs.appgyver.com

module.exports =

  # See styling options for tabs and other native components in app/common/native-styles/ios.css or app/common/native-styles/android.css
  # tabs: [
  #   {
  #     title: "Index"
  #     id: "index"
  #     location: "example#getting-started" # Supersonic module#view type navigation
  #   }
  #   {
  #     title: "Settings"
  #     id: "settings"
  #     location: "example#settings"
  #   }
  #   {
  #     title: "Internet"
  #     id: "internet"
  #     location: "http://google.com" # URLs are supported!
  #   }
  # ]

  rootView:
    location: "example#getting-started"

  preloads: [
    {
      id: "choose-location"
      location: "example#location"
    }
    {
      id: "survey1"
      location: "example#survey?id=0"
    }
    {
      id: "survey2"
      location: "example#survey?id=1"
    }
    {
      id: "survey3"
      location: "example#survey?id=2"
    }
    {
      id: "survey4"
      location: "example#survey?id=3"
    }
    {
      id: "survey5"
      location: "example#survey?id=4"
    }
    {
      id: "survey6"
      location: "example#survey?id=5"
    }
    {
      id: "survey7"
      location: "example#survey?id=6"
    }
    {
      id: "survey8"
      location: "example#survey?id=7"
    }
  ]


  # drawers:
  #   left:
  #     id: "leftDrawer"
  #     location: "example#drawer"
  #     showOnAppLoad: false
  #   options:
  #     animation: "swingingDoor"
  #
  # initialView:
  #   id: "initialView"
  #   location: "example#initial-view"
