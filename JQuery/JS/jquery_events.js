��' u s e   s t r i c t ' ;  
  
 $ ( d o c u m e n t ) . r e a d y ( ( )   = >   {  
  
         / / E v e n t o s   M o u s e   H o v e r   y   M o u s e   O u t    
         l e t   b o x   =   $ ( " . b o x " ) ;  
  
         $ ( b o x ) . m o u s e o v e r ( f u n c t i o n ( )   {  
                 $ ( t h i s ) . c s s ( " b a c k g r o u n d C o l o r " ,   " g r e e n " ) ;  
         } ) ;  
  
         $ ( b o x ) . m o u s e o u t ( f u n c t i o n ( )   {  
                 $ ( t h i s ) . c s s ( " b a c k g r o u n d C o l o r " ,   " y e l l o w " ) ;  
         } ) ;  
  
         / / E v e n t o   h o v e r    
         f u n c t i o n   c a m b i a C a f e ( )   {  
                 $ ( t h i s ) . c s s ( " b a c k g r o u n d C o l o r " ,   " b r o w n " ) ;  
         }  
  
         f u n c t i o n   c a m b i a N e g r o ( )   {  
                 $ ( t h i s ) . c s s ( " b a c k g r o u n d C o l o r " ,   " b l a c k " ) ;  
         }  
  
         l e t   b r o w n _ b l a c k   =   $ ( " . b r o w n _ b l a c k " ) ;  
         $ ( b r o w n _ b l a c k ) . h o v e r ( c a m b i a C a f e ,   c a m b i a N e g r o ) ;  
  
         / / E v e n t o   c l i c k   y   d b l c l i c k    
  
         $ ( b r o w n _ b l a c k ) . c l i c k ( f u n c t i o n ( e )   {  
                 $ ( t h i s ) . a d d C l a s s ( " m o r e _ w i d t h " ) ;  
         } ) ;  
  
         $ ( b r o w n _ b l a c k ) . d b l c l i c k ( f u n c t i o n ( )   {  
                 $ ( t h i s ) . c s s ( " w i d t h " ,   " 1 0 0 0 p x " ) ;  
         } ) ;  
  
         / / E v e n t o   f o c u s   y   b l u r  
         l e t   u s e r _ n a m e   =   $ ( " # u s e r _ n a m e " ) ;  
         / / F o c u s   e s   u n   e v e n t o   q u e   s e   a c c i o n a   c u a n d o   s e   e n t r a   d e n t r o   d e l   i n p u t    
         u s e r _ n a m e . f o c u s ( f u n c t i o n ( e )   {  
                 e . p r e v e n t D e f a u l t ( ) ;  
                 $ ( t h i s ) . c s s ( " b o r d e r " ,   " 2 p x   s o l i d   g r e e n " ) ;  
         } ) ;  
         / / F o c u s   s e   a c c i o n a   c u a n d o   s e   s a l e   d e l   i n p u t  
         u s e r _ n a m e . b l u r ( f u n c t i o n ( e )   {  
                 e . p r e v e n t D e f a u l t ( ) ;  
                 $ ( t h i s ) . c s s ( " b o r d e r " ,   " 1 p x   s o l i d   # c c c " ) ;  
                 l e t   f o r m _ d a t a   =   $ ( " # f o r m _ d a t a " ) ;  
                 / / f o r m _ d a t a . s h o w ( ) ;  
                 f o r m _ d a t a . t e x t ( u s e r _ n a m e . v a l ( ) ) . s h o w ( ) ;  
         } ) ;  
  
         / / E v e n t o   m o u s e u p   y   m o u s e d o w n  
  
         / / M o u s e u p   s e   l l a m a   c u a n d o   e l   r a t o n   e s   l e v a n t a d o   e n   u n   i n p u t  
         u s e r _ n a m e . m o u s e u p ( f u n c t i o n ( e )   {  
                 e . p r e v e n t D e f a u l t ( ) ;  
                 $ ( t h i s ) . c s s ( " b a c k g r o u n d C o l o r " ,   " g r e e n " ) ;  
         } ) ;  
  
         / / M o u s e d o w n   s e   l l a m a   c u a n d o   e l   r a t o n   e s   p r e s i o n a d o   e n   u n   i n p u t  
         u s e r _ n a m e . m o u s e d o w n ( f u n c t i o n ( e )   {  
                 e . p r e v e n t D e f a u l t ( ) ;  
                 $ ( t h i s ) . c s s ( " b a c k g r o u n d C o l o r " ,   " r e d " ) ;  
         } ) ;  
  
         / / E v e n t o   m o u s e m o v e ,   e s   u n   e v e n t o   q u e   s e   l l a m a   c u a n d o   e l   m o u s e   s e   m u e v e   e n   u n   e l e m e n t o  
         / / e n   e s t e   c a s o   e l   e v e n t o   s e   a c c i o n a   c u a n d o   e l   m o u s e   s e   m u e v e   e n   t o d o   e l   d o c u m e n t  
         / / s e   m o s t r a r a   l a s   c o o r d e n a d a s   d e l   m o u s e  
         $ ( d o c u m e n t ) . m o u s e m o v e ( f u n c t i o n ( e )   {  
                 e . p r e v e n t D e f a u l t ( ) ;  
                 l e t   f o l l o w _ m e   =   $ ( " # f o l l o w _ m e " ) ;  
                 f o l l o w _ m e . c s s ( " l e f t " ,   e v e n t . c l i e n t X ) ;  
                 f o l l o w _ m e . c s s ( " t o p " ,   e v e n t . c l i e n t Y ) ;  
         } ) ;  
 } ) ; 
