import * as React from 'react';
import { SVGProps } from 'react';

const SvgNoNotifications = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={38}
    height={39}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g opacity={0.6}>
      <path
        d="M14.25 27.624v-1a1 1 0 0 0-1 1h1Zm9.5 0h1a1 1 0 0 0-1-1v1Zm-9.5 1h9.5v-2h-9.5v2Zm8.5-1v1.583h2v-1.583h-2Zm-7.5 1.583v-1.583h-2v1.583h2Zm3.75 3.75a3.75 3.75 0 0 1-3.75-3.75h-2a5.75 5.75 0 0 0 5.75 5.75v-2Zm3.75-3.75a3.75 3.75 0 0 1-3.75 3.75v2a5.75 5.75 0 0 0 5.75-5.75h-2Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M30.994 28.459a2.584 2.584 0 0 0 1.673-2.418v-.928c0-.685-.273-1.342-.757-1.827l-.809-.809a.061.061 0 0 1-.018-.043v-5.893c0-6.674-5.41-12.084-12.083-12.084a12.045 12.045 0 0 0-8.506 3.501l1.414 1.415A10.051 10.051 0 0 1 19 6.457c5.569 0 10.083 4.515 10.083 10.084v5.893c0 .547.217 1.071.604 1.458l.809.809c.11.109.17.257.17.412v.928a.583.583 0 0 1-.583.583h-.924l1.835 1.835ZM10.096 11.804a10.039 10.039 0 0 0-1.18 4.737v5.893a2.06 2.06 0 0 1-.603 1.458l-.7-.7.7.7-.809.809a.583.583 0 0 0-.17.412v.928c0 .322.26.583.583.583h17l2 2h-19a2.583 2.583 0 0 1-2.584-2.583v-.928c0-.685.272-1.342.757-1.827l.809-.809a.061.061 0 0 0 .018-.043v-5.893c0-2.269.625-4.391 1.712-6.205l1.467 1.467Z"
        fill="currentColor"
      />
      <path stroke="currentColor" strokeWidth={2} d="m.707 2 34 34" />
    </g>
  </svg>
);

export default SvgNoNotifications;
