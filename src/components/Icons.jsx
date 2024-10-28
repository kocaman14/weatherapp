import React from 'react';
import { useSelector } from 'react-redux';

const Icons = () => {
  let link;
  const { weatAr } = useSelector((state) => state.weather)
  if (weatAr && weatAr.current && weatAr.current.icon_num) {
      switch (weatAr.current.icon_num) {
        case 1:
          link = "https://r.resimlink.com/pBkUls8_.png";
          break;
        case 2:
          link = "https://r.resimlink.com/OHclPDRL.png";
          break;
        case 3:
          link = "https://r.resimlink.com/5zb3Nw.png"; 
          break;
        case 4:
          link = "https://r.resimlink.com/qX25hd.png"; 
          break;
        case 5:
          link = "https://r.resimlink.com/ByJPzV49Sg.png"; 
          break;
        case 6:
          link ="https://r.resimlink.com/gnZ8cQI.png" ; 
          break;
        case 7:
          link = "https://r.resimlink.com/yGwdb.png"; 
          break;
        case 8:
          link = "https://r.resimlink.com/Bd3KfgRaIHEY.png"; 
          break;
        case 9:
          link = "https://r.resimlink.com/zyI4MlX.png"; 
          break;
        case 10:
          link = "https://r.resimlink.com/1zOYkP7.png"; 
          break;
        case 11:
          link ="https://r.resimlink.com/lBDOn.png"; 
          break;
        case 12:
          link = "https://r.resimlink.com/9FOEvmzdA.png"; 
          break;
        case 13:
          link ="https://r.resimlink.com/ShBo35.png" ; 
          break;
        case 14:
          link = "https://r.resimlink.com/k9lf45APx1.png"; 
          break;
        case 15:
          link = "https://r.resimlink.com/ZyXKEFBvjx.png"; 
          break;
        case 16:
          link = "https://r.resimlink.com/6gnHh.png"; 
          break;
        case 17:
          link ="https://r.resimlink.com/A4etD6YKgc7.png" ; 
          break;
        case 18:
          link ="https://r.resimlink.com/nl9vJNUFqQT.png"; 
          break;
        case 19:
          link ="https://r.resimlink.com/EzKOl.png" ; 
          break;
        case 20:
          link ="https://r.resimlink.com/Ux9Q3r_6-mVW.png" ; 
          break;
        case 21:
          link = "https://r.resimlink.com/n0owJ2rEOQHz.png"; 
          break;
        case 22:
          link = "https://r.resimlink.com/P0aKy5I9fnA.png"; 
          break;
        case 23:
          link = "https://r.resimlink.com/jgaIpVrD.png"; 
          break;
        case 24:
          link ="https://r.resimlink.com/16DawpLZX.png" ; 
          break;
        case 25:
          link = "https://r.resimlink.com/y7aVhber.png"; 
          break;
        case 26:
          link ="https://r.resimlink.com/GYXhOQ1v7.png" ; 
          break;
        case 27:
          link = "https://r.resimlink.com/3AeMV8CLf.png"; 
          break;
        case 28:
          link = "https://r.resimlink.com/R8cSzi.png"; 
          break;
        case 29:
          link = "https://r.resimlink.com/kbS3ZCONmD.png"; 
          break;
        case 30:
          link = "https://r.resimlink.com/BD20hdF.png"; 
          break;
        case 31:
          link = "https://r.resimlink.com/FBpoSgb.png"; 
          break;
        case 32:
          link = "https://r.resimlink.com/X4yAZJ_ogd.png"; 
          break;
        case 33:
          link ="https://r.resimlink.com/-MKv59Vwk.png" ; 
          break;
        case 34:
          link ="https://r.resimlink.com/7fL08qv4P.png" ; 
          break;
        case 35:
          link = "https://r.resimlink.com/rP4Tj.png"; 
          break;
        case 36:
          link ="https://r.resimlink.com/s0TUD.png" ; 
          break;
        
      default:
        link = "https://r.resimlink.com/pBkUls8_.png"; 
    }
  } else {
    link = "https://r.resimlink.com/pBkUls8_.png"; 
  }

  return (
    <div>
      <img src={link} alt="Weather Icon" />
    </div>
  );
};

export default Icons;
