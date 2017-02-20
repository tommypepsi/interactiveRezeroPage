function bubbleClick(dialogueId)
{
	document.getElementById("bubble").style.display = "block";
	var dialogues = document.getElementsByClassName("dialogue");
	for(var i = 0; i < dialogues.length; i++)
	{
		if(dialogues[i].id == dialogueId)
		{
			dialogues[i].style.display = "inline";
		}
		else
		{
			dialogues[i].style.display = "none";
		}
	}
	bubbleW = document.getElementById("bubble").offsetWidth;
	bubbleH = document.getElementById("bubble").offsetHeight;
	playerPosLeft = document.getElementById("player").style.left;
	playerPosTop = document.getElementById("player").style.top;
	bubbleMid = bubbleW/2;
	instruction("instrucDialogue");
	
	bubblePos = parseInt(playerPosLeft)-bubbleMid;
	document.getElementById("bubble").style.left = bubblePos  + "px";
	document.getElementById("bubble").style.top = parseInt(playerPosTop)-bubbleH-30 + "px";
}