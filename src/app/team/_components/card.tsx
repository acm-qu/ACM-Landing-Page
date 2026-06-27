import type { ITeamMemberCardProps } from '../types';
import { cubicBezier, motion } from 'motion/react';

export function TeamMemberCard({ name, role, image, borderColor, quote, animKey }: ITeamMemberCardProps) {

  return (
      <motion.div
        key={animKey}
        layout
        style={{
          textAlign: 'center',
          width: 'fit-content',
          minWidth: '320px', // base width
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          padding: '0 12px',
          flex: 1,
          maxWidth: '400px',
        }}
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -20 }}
        transition={{ duration: 0.5, delay: 0.05 * (parseInt(animKey.split("-")[0])), ease: cubicBezier(0.22, 0.01, 0.10, 0.97) }} // stagger based on index in key
      >
        <div
          style={{
            width: '168px',              // w-24 = 6rem
            height: '168px',             // h-24 = 6rem
            borderRadius: '50%',     // rounded-full
            marginBottom: '20px',    // mb-3 = 0.75rem
            background: borderColor,
            padding: '3px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: "relative"
          }}
          className='team-member'
        >
          <div style={{
            position: 'absolute',
            transformOrigin: "center",
            top: '-13px',
            left: '-13px',
            borderRadius: '999px',
            width: '200px',
            height: '200px',
            background: borderColor,
            zIndex: -1,
          }}
            className='border'
          />
          <div
            style={{
              width: '144px',              // w-24 = 6rem
              height: '144px',             // h-24 = 6rem
              borderRadius: '50%',     // rounded-full
              background: `url(${image})`,
              backgroundSize: "contain",
              padding: '12px',
              position: "absolute",
              zIndex: 10,
            }}
          >
            <img
              src={image}
              alt={name}
              style={{
                width: '100%',
                height: '100%',
                borderRadius: '50%',
                objectFit: 'cover',
                position: 'absolute',
                top: 0,
                left: 0,
                zIndex: 1,
                pointerEvents: 'none',
              }}
            />
            {role.split("").map((char, i) => (
              <div
                key={i}
                style={{
                  position: 'absolute',
                  width: '10px',
                  textAlign: 'center',
                  left: `calc(50% - 5px)`,
                  transform: "translateX(-50%)",
                  transformOrigin: "bottom",
                  animation: 'orbit 20s linear infinite',
                  // @ts-ignore
                  '--from': `${(i / role.length) * 360}deg`,
                  '--to': `${(i / role.length) * 360 - 360}deg`,
                  zIndex: -1,
                }}
                className='to-expand'
              ><span className='mono'>{char}</span></div>
            ))}
          </div>
        </div>

        <h4
          style={{
            fontSize: '28px',
            fontWeight: 400,
            fontFamily: 'Lexend, sans-serif',
            textAlign: 'center',
            marginBottom: '5px',
          }}
        >
          {name}
        </h4>
        <p
          style={{
            fontSize: '14px',
            fontWeight: 400,
            fontFamily: 'Poppins, sans-serif',
            letterSpacing: '1px',
            textAlign: 'center',
          }}
        >
          {role.split(" - ")[0]}
        </p>
        {quote && 
          <blockquote
            style={{
              fontSize: '14px',
              fontWeight: 400,
              fontFamily: 'Poppins, sans-serif',
              letterSpacing: '1px',
              textAlign: 'center',
              color: "var(--light-gray)",
              marginTop: '8px',
              fontStyle: 'italic',
            }}
          >
            &ldquo;{quote}&rdquo;
          </blockquote>
        }
      </motion.div>
  );
}