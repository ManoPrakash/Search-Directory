<?php
	$query=$_GET["val"];
	$xml = new DOMDocument();
	$xml->load('site.xml');
	$flag=0;
	$x=$xml->getElementsByTagName('category');
	for ($i=0; $i<=$x->length-1; $i++) 
	{
  		//Process only element nodes
  		if ($x->item($i)->nodeType==1) 
  		{
    		if ($x->item($i)->childNodes->item(0)->nodeValue == $query) 
    		{
      			$y=($x->item($i)->parentNode);
      			$flag=1;
     		}
  		}
	}
	if($flag==0)
	{
		return;
	}
	$count=0;
	$row=0;
	///echo '<div id="forview">';
	for($j=0;$j<$y->childNodes->length;$j++)
	{
		if($y->childNodes->item($j)->nodeName=='site')
		{
			$w=$y->childNodes->item($j)->childNodes;
			$l=$w->length;
			if($count==0)
			{
				echo '<div class="container"><div class="row">';
				$row++;
			}
			$count=(($count+1)%3);
		    echo '<div id="site"><div class="col-sm-4"><a class="divlink" href="http://'.$w->item(5)->nodeValue.'">
      				<div class="panel panel-primary">';
        	echo '<div class="panel-heading colorset">'.$w->item(1)->nodeValue.'</div>';
        	echo '<div class="panel-body"><img id="setsize"  src="'.$query.'/'.$w->item(3)->nodeValue.'" class="img-responsive" style="width:100%" alt="Image"></div>';
      		echo '</div></a></div></div>';
			if($count==0)
			{
				echo '</div></div>';
			}
		}
	}
	echo '</div>';
?>