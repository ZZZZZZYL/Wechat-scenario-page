var pageCount=0;
$(document).ready(function(){		
	var width=window.innerWidth;
	var height=window.innerHeight;
	
	$(".content").width(width);
	$(".content").height(6*height);
	$(".page").width(width);
	$(".page").height(height);
	

//	第一页飞入：
	
	$(".page1_building").fadeIn(2000,function(){
		$(".page1_title").fadeIn(2000);
		$(".page1_person").animate({width:'40%',height:'30%'},{duration: 800
		
		
	})
	
	$(".page1_text").animate({width:'90%',left:'60px'},{duration:3000 })
	
	});
	
	//监听
	$(".content").swipe({swipe:function(event,direction,duration,distance,fingerCount){
		if(direction=="up")
		{
			pageCount=pageCount+1;
		}
		else
		{
			pageCount=pageCount-1;
		}
		if(pageCount>5)
		{
			pageCount=5;
		}
		if(pageCount<0)
		{
			pageCount=0;
			
		}
		$(".content").animate({"top":pageCount * -100 + '%'},{duration:500,complete:pageAnimate()
		
		
		});
	}});
	
	
//	翻页
	$(".content").swipe({swipe:function(event,direction,duration,distance,fingerCount){
		if(direction=="up"){
			pageCount=pageCount+1;
		}
		else{
			pageCount=pageCount-1;
		}
		if(pageCount>5){
			pageCount=5;
		}
		if(pageCount<0){
			pageCount=0;
		}
		$(".content").animate({"top":pageCount*-100+'%'},{duration:500,complete:pageAnimate()});
      }
	});
});

function pageAnimate(){
	if(pageCount==1){
		$(".library").fadeIn(1000,function()
	{
		$(".cry").fadeIn(2000,function(){
			$(".cloud").fadeIn(1000,function(){
				$(".k").fadeIn(1000);$(".m").fadeIn(1000);$(".w").fadeIn(1000);
			});
			
		});
		$(".bird").animate({
			left: '100%'
		}, {
			duration: 5000,
			complete:function(){
				$(".canteen").fadeIn(1000,function(){
					$(".a").fadeIn(500,function(){
						$(".b").fadeIn(500,function(){
						$(".c").fadeIn(500,function(){
						$(".d").fadeIn(500,function(){
						$(".e").fadeIn(500,function(){
						$(".f").fadeIn(500,function(){
						$(".g").fadeIn(500,function(){
						$(".h").fadeIn(500,function(){
						$(".boring").fadeIn(1000,function(){
							
			
	setInterval(function(){
		var x = Math.random()*400;
		x = Math.round(x)
		var y = Math.random()*480;
		y = Math.round(y)
		$(".h1").animate({
		"left":x + 'px',
		"top":y+'px'});
	},500);
		
						});
						
					});
					});
					});
					});
					});
					});
					});
					});
				});
			}
		});
	});
	}
	if(pageCount==2){
		$(".page3_jiedao").fadeIn(2000,function() {
			$(".page3_dubai").animate({width: '100%',right: '-50%'}, {duration: 2000,complete() {
					$(".page3_dian").fadeIn(2000,function(){
						$(".page3_dian").animate({width: '40%',left: '10%',top:'60%'}, {duration: 3000,complete:function(){
//							$(".topic").animate({top:'10%'},{duration:2000});	
$(".topic").fadeIn(500);
					
				}});
			});
		}});
	});
	
}
	if(pageCount==3){
		$(".page4bg").fadeIn(1000,function(){
					    								var canvas = document.getElementById("canvas1");
								  if (canvas.getContext){
								    var ctx = canvas.getContext('2d');
								    // Quadratric curves example
								    ctx.beginPath();
								    ctx.moveTo(75,40);
								    ctx.bezierCurveTo(75,37,70,25,50,25);
								    ctx.bezierCurveTo(20,25,20,62.5,20,62.5);
								    ctx.bezierCurveTo(20,80,40,102,75,120);
								    ctx.bezierCurveTo(110,102,130,80,130,62.5);
								    ctx.bezierCurveTo(130,62.5,130,25,100,25);
								    ctx.bezierCurveTo(85,25,75,37,75,40);
									ctx.fillStyle = "red";
								    ctx.fill();
								  }
      $(".page4man3").fadeIn(1000,function(){
      	        $(".page4man3").fadeOut(4000);
      			$(".page4woman").fadeIn(2000,function(){
			      $(".page4man").fadeIn(2000,function(){
				    $(".page4woman").fadeOut(1000);
				    $(".page4woman2").fadeIn(2000,function(){
					$(".page4man").fadeOut(1000);
				    });
				    $(".page4dd").fadeIn(2000,function(){
				   
								$(".page4man2").fadeIn(2000);
									$(".canvas1").fadeOut(100);
								var canvas = document.getElementById("canvas2");
								  if (canvas.getContext){
								    var ctx = canvas.getContext('2d');
								    // Quadratric curves example
								    ctx.beginPath();
								    ctx.moveTo(75,40);
								    ctx.bezierCurveTo(75,37,70,25,50,25);
								    ctx.bezierCurveTo(20,25,20,62.5,20,62.5);
								    ctx.bezierCurveTo(20,80,40,102,75,120);
								    ctx.bezierCurveTo(110,102,130,80,130,62.5);
								    ctx.bezierCurveTo(130,62.5,130,25,100,25);
								    ctx.bezierCurveTo(85,25,75,37,75,40);
									ctx.fillStyle = "red";
								    ctx.fill();
								  }
					
				});
				
			}); 

			    $(".p41").fadeIn(2500,function(){
				$(".p41").fadeOut(2500,function(){});
			});
		});
      });
	});
	}
	if(pageCount==4){
			$(".study").animate({top:'50px',left:'10%'},{duration:2000,complete:function(){
		$(".page5_cpstudy").fadeIn(2000,function(){
		
	$(".studyword1").animate({top:'150px',left:'2px'},{duration:1000,complete:function(){
		$(".studyword2").animate({top:'200px',left:'150px'},{duration:2000,complete:function(){
			$(".page5_cpstudy").animate({top:'50%',left:'100px'},{duration:2000,complete:function(){
				$(".studyword2").fadeOut(2000,function(){
					$(".studyword1").fadeOut(2000,function(){
					
							$(".page5_cpstudy").fadeOut(2000,function(){
								$(".study").fadeOut(2000,function(){
									$(".page5_sun").animate({right:'-100%'},{duration:1000});
								});
							});
								
								
							
								
							});
						});
						
					}});
					
				}});
				
			}});
			
		});
		
	}});
	

	}
	if(pageCount==5){
		  $(".page6_bg").fadeIn(2000,function(){
    $(".page6_building").fadeIn(2000);
    $(".page6_star1").fadeIn(1000);
    $(".page6_star2").fadeIn(1000);
    $(".page6_star3").fadeIn(1000,function(){
      $(".page6_walk").fadeIn(2000,function(){
        $(".word1").animate({left:'3%'},{duration:2000,complete:function(){
          $(".page6_walk").fadeOut(3000,function(){
            $(".word2").animate({left:'3%'},{duration:2000});
              $(".page6_cpheart").fadeIn(2000,function(){
                $(".word3").animate({left:'3%'},{duration:3000,complete:function(){
                  $(".word4").animate({left:'3%'},{duration:3000,complete:function(){
                    $(".page6_word").fadeOut(2000);
                    $(".page6_cpheart").fadeOut(2000);
                    $(".page6_star1").fadeOut(2000);
                    $(".page6_star2").fadeOut(2000);
                    $(".page6_star3").fadeOut(2000);
                    $(".page6_building").fadeOut(2000,function(){
                      $(".page6_wbg1").fadeIn(2000,function(){
                        $(".page6_aword1").animate({left:'30%',top:'25%'},{duration:2000,complete:function(){
                          $(".page6_wbg1").fadeOut(2000);
                          $(".page6_wbg2").fadeIn(2000,function(){
                            $(".page6_aword2").animate({left:'30%',top:'25%'},{duration:2000,complete:function(){
                              $(".page6_aword3").animate({left:'30%',top:'30%'},{duration:2000,complete:function(){
                                $(".page6_aword1").fadeOut(1000);
                                $(".page6_aword2").fadeOut(1000);
                                $(".page6_aword3").fadeOut(1000);
                                $(".page6_wbg2").fadeOut(2000,function(){
                                  $(".page6_tv").fadeIn(1000,function(){
                                    $(".page6_tv").animate({left:'5%',top:'5%',width:'60%'},{duration:1000,complete:function(){
                                      $(".page6_knite").fadeIn(1000,function(){
                                        $(".page6_knite").animate({left:'5%',top:'20%',width:'60%'},{duration:1000,complete:function(){
                                          $(".page6_cpcp").fadeIn(1000,function(){
                                            $(".page6_cpcp").animate({width:'35%',left:'15%'},{duration:1000,complete:function(){
                                              $(".page6_wpic").fadeIn(1000,function(){
                                                $(".page6_wpic").fadeOut(1000);
                                                $(".page6_cpcp").fadeOut(1000);
                                                $(".page6_knite").fadeOut(1000);
                                                $(".page6_tv").fadeOut(1000,function(){
                                                  $(".cake").fadeIn(1000,function(){
                                                    $(".page6_loff").fadeIn(1000);
                                                  });
                                                });
                                                
                              
                                              });
                                            }});
                                          });
                                        }});
                                      });
                                    }});
                                  });
                                });
                              }});
                            }});
                          });
                        }});
                      });
                    
                    });
                  
                  }});
                }});
              });
          
          });   
        }});
      });
    });
  
  });
	}
}
function lightOn(obj)
{
	obj.src="img/cakeoff.png";
	$(".page6_loff").fadeOut(1000);
	$(".cake").fadeOut(3000,function(){
	  $(".page6_happy").fadeIn(1000,function(){
 	    $(".page6_happy").fadeOut(3000,function(){
 	      $(".page6_end").fadeIn(2000,function(){
 	        $(".lheart").fadeIn(1000);
 	      });
 	    });
	  });
	  
	});
}
function playMusic(obj){
	var player=document.getElementById("mus");
	if(player.paused){
		player.play();
		obj.src="img/musicBtn_副本.png";
	}
	else{
		player.pause();
		obj.src="img/musicBtnOff_副本.png";
	}
	if(player.stop){
		player.play();
	}
}

	