import React from 'react';
import './AiCard.css'

export default function Aicard() {
  return (
    <>
    <div className="grid">
    <div className="grid__item">
      <div className="card"><img className="card__img card__img_paper"  />
        <div className="card__content">
          <h1 className="card__header">A starry night</h1>
          
        </div>
      </div>
    </div>
    </div>
    <div className="grid">
    <div className="grid__item">
      <div className="card"><img className="card__img card__img_Aibas"  />
        <div className="card__content">
          <h1 className="card__header">AI based candidate filtering
          </h1>
          
        </div>
      </div>
    </div>
    </div>
    <div className="grid">
    <div className="grid__item">
      <div className="card"><img className="card__img card__img_Predictivematching"  />
        <div className="card__content">
          <h1 className="card__header">Predictive matching
          </h1>
          
        </div>
      </div>
    </div>
    </div>
    <div className="grid">
    <div className="grid__item">
      <div className="card"><img className="card__img card__img_Candidatesranking"  />
        <div className="card__content">
          <h1 className="card__header">Candidates ranking
          </h1>
          
        </div>
      </div>
    </div>
    </div>
    <div className="grid">
    <div className="grid__item">
      <div className="card"><img className="card__img card__img_Quick"  />
        <div className="card__content">
          <h1 className="card__header">Quick 
          hiring</h1>
          
        </div>
      </div>
    </div>
    </div>
  
    </>
  );
}
