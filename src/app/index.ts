import { Chart } from './components';

/* new Chart()
   .container('.chart-container')
   .data(data)
   .svgWidth(window.innerWidth)
   .svgHeight(window.innerWidth)
   .initialZoom(0.6)
   .onNodeClick(d=> console.log(d+' node clicked'))
   .render() */

const data = [
  {
    nodeId: 'O-1',
    parentNodeId: null,
    width: 336,
    height: 149,
    borderWidth: 1,
    borderRadius: 15,
    borderColor: { red: 15, green: 140, blue: 121, alpha: 1 },
    backgroundColor: { red: 0, green: 81, blue: 90, alpha: 1 },
    nodeImage: {
      url:
        'https://raw.githubusercontent.com/bumbeishvili/Assets/master/Projects/D3/Organization%20Chart/cto.jpg',
      width: 100,
      height: 100,
      centerTopDistance: 0,
      centerLeftDistance: 0,
      cornerShape: 'ORIGINAL',
      shadow: false,
      borderWidth: 0,
      borderColor: { red: 19, green: 123, blue: 128, alpha: 1 }
    },
    template:
      '<div>\n                  <div style="margin-left:70px;\n                              margin-top:10px;\n                              font-size:20px;\n                              font-weight:bold;\n                         ">Ian Devling </div>\n                 <div style="margin-left:70px;\n                              margin-top:3px;\n                              font-size:16px;\n                         ">Cheaf Executive Officer  </div>\n\n                 <div style="margin-left:70px;\n                              margin-top:3px;\n                              font-size:14px;\n                         ">Business first</div>\n\n                 <div style="margin-left:193px;\n                             margin-top:15px;\n                             font-size:13px;\n                             position:absolute;\n                             bottom:5px;\n                            ">\n                      <div>CTO office</div>\n                      <div style="margin-top:5px">Corporate</div>\n                 </div>\n              </div>',
    connectorLineColor: { red: 11, green: 123, blue: 108, alpha: 1 },
    connectorLineWidth: 5,
    dashArray: '',
    expanded: false,
    directSubordinates: 4,
    totalSubordinates: 1515
  },
  {
    nodeId: 'O-2',
    parentNodeId: 'O-1',
    width: 349,
    height: 150,
    borderWidth: 1,
    borderRadius: 15,
    borderColor: { red: 15, green: 140, blue: 121, alpha: 1 },
    backgroundColor: { red: 0, green: 81, blue: 90, alpha: 1 },
    nodeImage: {
      url:
        'https://raw.githubusercontent.com/bumbeishvili/Assets/master/Projects/D3/Organization%20Chart/general.jpg',
      width: 100,
      height: 100,
      centerTopDistance: 0,
      centerLeftDistance: 0,
      cornerShape: 'CIRCLE',
      shadow: false,
      borderWidth: 0,
      borderColor: { red: 19, green: 123, blue: 128, alpha: 1 }
    },
    template:
      '<div>\n                  <div style="margin-left:70px;\n                              margin-top:10px;\n                              font-size:20px;\n                              font-weight:bold;\n                         ">Davolio Nancy </div>\n                 <div style="margin-left:70px;\n                              margin-top:3px;\n                              font-size:16px;\n                         ">CTO  </div>\n\n                 <div style="margin-left:70px;\n                              margin-top:3px;\n                              font-size:14px;\n                         ">Business one</div>\n\n                 <div style="margin-left:199.5px;\n                             margin-top:15px;\n                             font-size:13px;\n                             position:absolute;\n                             bottom:5px;\n                            ">\n                      <div>CEO office</div>\n                      <div style="margin-top:5px">Corporate</div>\n                 </div>\n              </div>',
    connectorLineColor: { red: 11, green: 123, blue: 108, alpha: 1 },
    connectorLineWidth: 5,
    dashArray: '',
    expanded: false,
    directSubordinates: 9,
    totalSubordinates: 812
  },
  {
    nodeId: 'O-3',
    parentNodeId: 'O-1',
    width: 337,
    height: 136,
    borderWidth: 1,
    borderRadius: 15,
    borderColor: { red: 15, green: 140, blue: 121, alpha: 1 },
    backgroundColor: { red: 0, green: 81, blue: 90, alpha: 1 },
    nodeImage: {
      url:
        'https://raw.githubusercontent.com/bumbeishvili/Assets/master/Projects/D3/Organization%20Chart/female.jpg',
      width: 100,
      height: 100,
      centerTopDistance: 0,
      centerLeftDistance: 0,
      cornerShape: 'ROUNDED',
      shadow: false,
      borderWidth: 0,
      borderColor: { red: 19, green: 123, blue: 128, alpha: 1 }
    },
    template:
      '<div>\n                  <div style="margin-left:70px;\n                              margin-top:10px;\n                              font-size:20px;\n                              font-weight:bold;\n                         "> Leverling Janet </div>\n                 <div style="margin-left:70px;\n                              margin-top:3px;\n                              font-size:16px;\n                         ">CTO  </div>\n\n                 <div style="margin-left:70px;\n                              margin-top:3px;\n                              font-size:14px;\n                         ">Business two </div>\n\n                 <div style="margin-left:193.5px;\n                             margin-top:15px;\n                             font-size:13px;\n                             position:absolute;\n                             bottom:5px;\n                            ">\n                      <div>CEO office</div>\n                      <div style="margin-top:5px">Corporate</div>\n                 </div>\n              </div>',
    connectorLineColor: { red: 11, green: 123, blue: 108, alpha: 1 },
    connectorLineWidth: 5,
    dashArray: '',
    expanded: false,
    directSubordinates: 3,
    totalSubordinates: 413
  },
  {
    nodeId: 'O-4',
    parentNodeId: 'O-1',
    width: 303,
    height: 134,
    borderWidth: 1,
    borderRadius: 15,
    borderColor: { red: 15, green: 140, blue: 121, alpha: 1 },
    backgroundColor: { red: 0, green: 81, blue: 90, alpha: 1 },
    nodeImage: {
      url:
        'https://raw.githubusercontent.com/bumbeishvili/Assets/master/Projects/D3/Organization%20Chart/female.jpg',
      width: 100,
      height: 100,
      centerTopDistance: 0,
      centerLeftDistance: 0,
      cornerShape: 'CIRCLE',
      shadow: false,
      borderWidth: 0,
      borderColor: { red: 19, green: 123, blue: 128, alpha: 1 }
    },
    template:
      '<div>\n                  <div style="margin-left:70px;\n                              margin-top:10px;\n                              font-size:20px;\n                              font-weight:bold;\n                         "> Leverling Janet </div>\n                 <div style="margin-left:70px;\n                              margin-top:3px;\n                              font-size:16px;\n                         ">CTO  </div>\n\n                 <div style="margin-left:70px;\n                              margin-top:3px;\n                              font-size:14px;\n                         ">Business three</div>\n\n                 <div style="margin-left:176.5px;\n                             margin-top:15px;\n                             font-size:13px;\n                             position:absolute;\n                             bottom:5px;\n                            ">\n                      <div>CEO office</div>\n                      <div style="margin-top:5px">Corporate</div>\n                 </div>\n              </div>',
    connectorLineColor: { red: 11, green: 123, blue: 108, alpha: 1 },
    connectorLineWidth: 5,
    dashArray: '',
    expanded: false,
    directSubordinates: 3,
    totalSubordinates: 142
  },
  {
    nodeId: 'O-5',
    parentNodeId: 'O-1',
    width: 312,
    height: 138,
    borderWidth: 1,
    borderRadius: 15,
    borderColor: { red: 15, green: 140, blue: 121, alpha: 1 },
    backgroundColor: { red: 0, green: 81, blue: 90, alpha: 1 },
    nodeImage: {
      url:
        'https://raw.githubusercontent.com/bumbeishvili/Assets/master/Projects/D3/Organization%20Chart/female.jpg',
      width: 100,
      height: 100,
      centerTopDistance: 0,
      centerLeftDistance: 0,
      cornerShape: 'ORIGINAL',
      shadow: false,
      borderWidth: 0,
      borderColor: { red: 19, green: 123, blue: 128, alpha: 1 }
    },
    template:
      '<div>\n                  <div style="margin-left:70px;\n                              margin-top:10px;\n                              font-size:20px;\n                              font-weight:bold;\n                         "> Leverling Janet </div>\n                 <div style="margin-left:70px;\n                              margin-top:3px;\n                              font-size:16px;\n                         ">CTO  </div>\n\n                 <div style="margin-left:70px;\n                              margin-top:3px;\n                              font-size:14px;\n                         ">Business four </div>\n\n                 <div style="margin-left:181px;\n                             margin-top:15px;\n                             font-size:13px;\n                             position:absolute;\n                             bottom:5px;\n                            ">\n                      <div>CEO office</div>\n                      <div style="margin-top:5px">Corporate</div>\n                 </div>\n              </div>',
    connectorLineColor: { red: 11, green: 123, blue: 108, alpha: 1 },
    connectorLineWidth: 5,
    dashArray: '',
    expanded: false,
    directSubordinates: 3,
    totalSubordinates: 144
  },
  {
    nodeId: 'O-6',
    parentNodeId: 'O-2',
    width: 312,
    height: 132,
    borderWidth: 1,
    borderRadius: 15,
    borderColor: { red: 15, green: 140, blue: 121, alpha: 1 },
    backgroundColor: { red: 0, green: 81, blue: 90, alpha: 1 },
    nodeImage: {
      url:
        'https://raw.githubusercontent.com/bumbeishvili/Assets/master/Projects/D3/Organization%20Chart/female.jpg',
      width: 100,
      height: 100,
      centerTopDistance: 0,
      centerLeftDistance: 0,
      cornerShape: 'ROUNDED',
      shadow: false,
      borderWidth: 0,
      borderColor: { red: 19, green: 123, blue: 128, alpha: 1 }
    },
    template:
      '<div>\n                  <div style="margin-left:70px;\n                              margin-top:10px;\n                              font-size:20px;\n                              font-weight:bold;\n                         "> Leverling Janet </div>\n                 <div style="margin-left:70px;\n                              margin-top:3px;\n                              font-size:16px;\n                         ">CTO  </div>\n\n                 <div style="margin-left:70px;\n                              margin-top:3px;\n                              font-size:14px;\n                         "> Finance Department</div>\n\n                 <div style="margin-left:181px;\n                             margin-top:15px;\n                             font-size:13px;\n                             position:absolute;\n                             bottom:5px;\n                            ">\n                      <div>CEO office</div>\n                      <div style="margin-top:5px">Corporate</div>\n                 </div>\n              </div>',
    connectorLineColor: { red: 11, green: 123, blue: 108, alpha: 1 },
    connectorLineWidth: 5,
    dashArray: '',
    expanded: false,
    directSubordinates: 9,
    totalSubordinates: 429
  }
];

const chart = new Chart();
chart.setData(data);
chart.render();
