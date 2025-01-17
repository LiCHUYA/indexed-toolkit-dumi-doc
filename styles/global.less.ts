export function globalCSS():string {
  return `

    .dumi-default-logo{
      line-height: 0!important;
    }
      .dumi-default-header-left{
        width: 200px!important;
      }
    .dumi-default-hero-title{
        font-size: 135px!important;
    }
    .dumi-default-features{ 
     display: flex;
     justify-content: center;
     align-items: center;
    }

    .dumi-default-features-item{
      text-align: center;
      transition: all 0.3s ease;
      padding: 20px;
      border-radius: 8px;
      border: 1px solid #e8e8e8;
      
      &:hover {
        transform: translateY(-2px);
        box-shadow: 0 2px 8px rgba(0, 112, 204, 0.1);
        border-color: #91d5ff;
      }
    }
    `;
}
