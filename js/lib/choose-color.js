/**
@author Victor Maestri
@since 2016
**/


// Init a component
$.fn.sbxColorChoice = function (params) {

  const { reseteCor, removePallet, textResetColorButton, selecionarCor } = params
  let openChooseColor = false;

  //Function that close the component
  const closeChooseColor = (element) => {
    $('body').css('overflow', 'auto');
    element.slideUp('fast', function () {
      element.remove();
      openChooseColor = false;
    });
  }

  // Function that apply the color selected
  const chooseColor = (element, e) => {
    element.find('ul li').click(function () {
      const color = $(this).attr('data-color');
      const colorName = $(this).attr('data-name');

      closeChooseColor(element);
      selecionarCor(color,colorName, e);
    });
  }

  // Function that reset color
  const removePalletColor = () => {
    if (removePallet != '' && removePallet != undefined) {
      $('body').find(removePallet).remove();
    }
  }

  // Function that add a custom text in reset color button
  const constumResetTextButton = (element) => {
    if (textResetColorButton) {
      element.find(".reset-color-button").html(textResetColorButton);
    }
  }

  // Function that create modal's effect
  const effectModal = (element) => {
    element.slideDown('fast', function () {
      element.focus();
    });
  }

  // Function that mark where the pallet will open
  const positionElement = (element, e) => {
    const $target = $(e.target);
    const $targetPosicao = $target.offset();
    const $targetHeight = $target.height();
    const $targetWdith = $target.width();
    const $screenHeight = $(window).height();
    const $screenWidth = $(window).width();
    const $elementHeight = element.outerHeight();
    const $elementWidth = element.outerWidth();

    let top, left

    if ($targetPosicao.top + $elementHeight > $screenHeight) {
      top = $targetPosicao.top - $elementHeight + 12;
      var elementoPosicao = 'co-color-list--above';
    } else {
      top = $targetPosicao.top + $targetHeight + 32;
      var elementoPosicao = 'co-color-list--bellow';
    }

    if ($targetPosicao.left + $elementWidth > $screenWidth) {
      left = $targetPosicao.left - $targetWdith
      var elementoPosicao2 = 'co-color-list--right';
    } else {
      left = $targetPosicao.left
      var elementoPosicao2 = 'co-color-list--left';
    }

    element.find('ul.color-reset li').attr('data-color', reseteCor);
    element.css({ 'top': top, 'left': left }).addClass([elementoPosicao, elementoPosicao2]);
  }

  /*Event click
  $(this).click(function (e) {
    if (!openChooseColor) {
      $.get("./choose-color.html", function (data) {
        const $element = $(data);

        $('body').append($element);
        $('body').css('overflow', 'hidden');

        positionElement($element, e)
        effectModal($element)
        chooseColor($element, e)
        removePalletColor()
        constumResetTextButton($element)

        $element.focusout(() => closeChooseColor($element));

        openChooseColor = true;
      });
    }

  });*/

  $(this).click(function (e) {
    if (!openChooseColor) {

      data = 
      `<div class="co-color-list co-shadow-3dp" style="display:none" tabindex="-1">
        <h1>Pick A Color</h1>
        <ul class="color-pallet">
          <li class="co-hue-1" data-color="#000000" data-name="BV Black" style="background-color:#000000"></li>
          <li class="co-hue-1" data-color="#ffffff" data-name="White Out" style="background-color:#FFFFFF"></li>
          <li class="co-hue-1" data-color="#f3bcd4" data-name="Pink Ribbon" style="background-color:#f3bcd4"></li>
          <li class="co-hue-1" data-color="#990000" data-name="TVD Red" style="background-color:#990000"></li>
      
          <li class="co-hue-1" data-color="#FF7200" data-name="Cowboy Orange" style="background-color:#FF7200"></li>
          <li class="co-hue-1" data-color="#FCE000" data-name="Cerveza Yellow" style="background-color:#FCE000"></li>
          <li class="co-hue-1" data-color="#5ADD45" data-name="Key Lime" style="background-color:#5ADD45"></li>
          <li class="co-hue-1" data-color="#00A844" data-name="Irish Green" style="background-color:#00A844"></li>
          
          <li class="co-hue-1" data-color="#8bb4e8" data-name="Carolina Blue" style="background-color:#8bb4e8"></li>
          <li class="co-hue-1" data-color="#0019a8" data-name="Oceanside Blue" style="background-color:#0019a8"></li>
          <li class="co-hue-1" data-color="#4f03a9" data-name="Purple Haze" style="background-color:#4f03a9"></li>
        </ul>
      </div>`;
    
      const $element = $(data);

        $('body').append($element);
        $('body').css('overflow', 'hidden');

        positionElement($element, e)
        effectModal($element)
        chooseColor($element, e)
        removePalletColor()
        constumResetTextButton($element)

        $element.focusout(() => closeChooseColor($element));

        openChooseColor = true;
    }
  });

}



// Init a component
$.fn.sbxMixColorChoice = function (params) {

  const { reseteCor, removePallet, textResetColorButton, selecionarCor } = params
  let openChooseColor = false;

  //Function that close the component
  const closeChooseColor = (element) => {
    $('body').css('overflow', 'auto');
    element.slideUp('fast', function () {
      element.remove();
      openChooseColor = false;
    });
  }

  // Function that apply the color selected
  const chooseColor = (element, e) => {
    element.find('ul li').click(function () {
      const color1 = $(this).attr('data-color1');
      const color2 = $(this).attr('data-color2');
      const colorName = $(this).attr('data-name');

      closeChooseColor(element);
      selecionarCor(color1,color2,colorName, e);
    });
  }

  // Function that reset color
  const removePalletColor = () => {
    if (removePallet != '' && removePallet != undefined) {
      $('body').find(removePallet).remove();
    }
  }

  // Function that add a custom text in reset color button
  const constumResetTextButton = (element) => {
    if (textResetColorButton) {
      element.find(".reset-color-button").html(textResetColorButton);
    }
  }

  // Function that create modal's effect
  const effectModal = (element) => {
    element.slideDown('fast', function () {
      element.focus();
    });
  }

  // Function that mark where the pallet will open
  const positionElement = (element, e) => {
    const $target = $(e.target);
    const $targetPosicao = $target.offset();
    const $targetHeight = $target.height();
    const $targetWdith = $target.width();
    const $screenHeight = $(window).height();
    const $screenWidth = $(window).width();
    const $elementHeight = element.outerHeight();
    const $elementWidth = element.outerWidth();

    let top, left

    if ($targetPosicao.top + $elementHeight > $screenHeight) {
      top = $targetPosicao.top - $elementHeight + 12;
      var elementoPosicao = 'co-color-list--above';
    } else {
      top = $targetPosicao.top + $targetHeight + 32;
      var elementoPosicao = 'co-color-list--bellow';
    }

    if ($targetPosicao.left + $elementWidth > $screenWidth) {
      left = $targetPosicao.left - $targetWdith
      var elementoPosicao2 = 'co-color-list--right';
    } else {
      left = $targetPosicao.left
      var elementoPosicao2 = 'co-color-list--left';
    }

    element.find('ul.color-reset li').attr('data-color', reseteCor);
    element.css({ 'top': top, 'left': left }).addClass([elementoPosicao, elementoPosicao2]);
  }

  /*Event click
  $(this).click(function (e) {
    if (!openChooseColor) {
      $.get("choose-mix-color.html", function (data) {
        const $element = $(data);

        $('body').append($element);
        $('body').css('overflow', 'hidden');

        positionElement($element, e)
        effectModal($element)
        chooseColor($element, e)
        removePalletColor()
        constumResetTextButton($element)

        $element.focusout(() => closeChooseColor($element));

        openChooseColor = true;
      });
    }

  });*/

  $(this).click(function (e) {
    if (!openChooseColor) {

      data =               
      `<div class="co-color-list co-shadow-3dp" style="display:none" tabindex="-1">
      <h1>Pick A Color</h1>
      <ul class="color-pallet mix">
        <li class="co-hue-1" data-color1="#000000" data-color2="#FFFFFF" data-name="Black/White" >
          <div class="half-color" style="background-color:#000000"></div>
          <div class="half-color" style="background-color:#FFFFFF"></div>
        </li>
        <li class="co-hue-1" data-color1="#FFFFFF" data-color2="#000000" data-name="White/Black" >
          <div class="half-color" style="background-color:#FFFFFF"></div>
          <div class="half-color" style="background-color:#000000"></div>
        </li>
        <li class="co-hue-1" data-color1="#847248" data-color2="#000000" data-name="Gold/Black" >
          <div class="half-color" style="background-color:#847248"></div>
          <div class="half-color" style="background-color:#000000"></div>
        </li>
        <li class="co-hue-1" data-color1="#FFFFFF" data-color2="#FFFFFF" data-name="White/White" >
          <div class="half-color" style="background-color:#FFFFFF"></div>
          <div class="half-color" style="background-color:#FFFFFF"></div>
        </li>
        <li class="co-hue-1" data-color1="#000000" data-color2="#000000" data-name="Black/Black" >
          <div class="half-color" style="background-color:#000000"></div>
          <div class="half-color" style="background-color:#000000"></div>
        </li>
        <li class="co-hue-1" data-color1="#C0C0C0" data-color2="#000000" data-name="Silver/Black" >
          <div class="half-color" style="background-color:#C0C0C0"></div>
          <div class="half-color" style="background-color:#000000"></div>
        </li>
      </ul>
      </div>`;
    
      const $element = $(data);

        $('body').append($element);
        $('body').css('overflow', 'hidden');

        positionElement($element, e)
        effectModal($element)
        chooseColor($element, e)
        removePalletColor()
        constumResetTextButton($element)

        $element.focusout(() => closeChooseColor($element));

        openChooseColor = true;
    }
  });
}

