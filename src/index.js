const Tabletop = require('tabletop');
const d3 = require('d3');

function init() {

  Tabletop.init( { key: 'https://docs.google.com/spreadsheets/d/1Tbl9xsVBHD3VGjyAZo4-2hbMCHCOLU2tQTULNP9zTR0/edit?usp=sharing',
                   callback: function(data, tabletop) {
                       console.log(data)
                       let block = d3.select('#your-ideas-responses').selectAll('div')
                                     .data(data)
                                     .enter()
                                     .append('div')
                                     .classed('idea-block', true)

                       block.append('p').html(d => { return d.suggestion; });
                       block.append('div')
                            .classed('attribution', true)
                            .html(d => {
                              if(d.name_or_twitter[0] === '@'){
                                return `<a href="https://twitter.com/${d.name_or_twitter.slice(1, d.name_or_twitter.length)}">${d.name_or_twitter}</a>`;
                              } else {
                                if(d.name_or_twitter.length === 0){
                                  return 'Anonymous';
                                } else {
                                  return d.name_or_twitter;
                                }
                              }
                            })

                   },
                   simpleSheet: true } )

  d3.selectAll('p.add-idea').on('click', d => {
    const form = d3.select('#form');
    if (form.classed('show')){
      form.classed('show', false);
    } else {
      form.classed('show', true);
    }
  })
}
window.addEventListener('DOMContentLoaded', init)

init();
console.log('tester')
