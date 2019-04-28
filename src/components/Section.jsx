import React from 'react';
import styled from 'styled-components';

const View = styled.section`
  flex: 1;
  padding: 1em;
`;

export default function Section() {
  return (
    <View>
      <h1>Portfólio</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis tortor
        est, eleifend ac commodo sed, feugiat porta neque. Phasellus auctor
        mollis velit, ut pretium orci lobortis et. Vivamus quis ex et turpis
        accumsan commodo. Suspendisse non tellus in libero posuere lacinia.
        Donec semper convallis justo. Suspendisse malesuada tempor elit, eu
        porta sapien semper nec. Suspendisse mattis in purus in rutrum. Sed a
        ligula vel nibh dapibus imperdiet. Nullam sodales dolor risus, non
        ullamcorper odio rhoncus nec. In magna neque, imperdiet quis nibh vitae,
        mollis tempor nulla. Integer lacus nibh, malesuada at vulputate id,
        hendrerit a augue. Morbi ultrices lectus urna, sit amet consectetur diam
        laoreet sed. Nunc semper nulla at est commodo, bibendum varius sapien
        commodo. Nulla maximus odio diam, vel interdum velit facilisis vitae.
      </p>
    </View>
  );
}
