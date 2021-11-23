/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
export { EMPTY_ARRAY } from '../util/empty';
export { anchorDef, elementDef } from './element';
export { clearOverrides, createNgModuleFactory, overrideComponentView, overrideProvider } from './entrypoint';
export { ngContentDef } from './ng_content';
export { moduleDef, moduleProvideDef } from './ng_module';
export { directiveDef, pipeDef, providerDef } from './provider';
export { pureArrayDef, pureObjectDef, purePipeDef } from './pure_expression';
export { queryDef } from './query';
export { createComponentFactory, getComponentViewDefinitionFactory, nodeValue, ViewRef_ } from './refs';
export { initServicesIfNeeded } from './services';
export { textDef } from './text';
export { createRendererType2, elementEventFullName, EMPTY_MAP, inlineInterpolate, interpolate, rootRenderNodes, tokenKey } from './util';
export { viewDef } from './view';
export { attachEmbeddedView, detachEmbeddedView, moveEmbeddedView } from './view_attach';
export * from './types';
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9jb3JlL3NyYy92aWV3L2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7R0FNRztBQUVILE9BQU8sRUFBQyxXQUFXLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDMUMsT0FBTyxFQUFDLFNBQVMsRUFBRSxVQUFVLEVBQUMsTUFBTSxXQUFXLENBQUM7QUFDaEQsT0FBTyxFQUFDLGNBQWMsRUFBRSxxQkFBcUIsRUFBRSxxQkFBcUIsRUFBRSxnQkFBZ0IsRUFBQyxNQUFNLGNBQWMsQ0FBQztBQUM1RyxPQUFPLEVBQUMsWUFBWSxFQUFDLE1BQU0sY0FBYyxDQUFDO0FBQzFDLE9BQU8sRUFBQyxTQUFTLEVBQUUsZ0JBQWdCLEVBQUMsTUFBTSxhQUFhLENBQUM7QUFDeEQsT0FBTyxFQUFDLFlBQVksRUFBRSxPQUFPLEVBQUUsV0FBVyxFQUFDLE1BQU0sWUFBWSxDQUFDO0FBQzlELE9BQU8sRUFBQyxZQUFZLEVBQUUsYUFBYSxFQUFFLFdBQVcsRUFBQyxNQUFNLG1CQUFtQixDQUFDO0FBQzNFLE9BQU8sRUFBQyxRQUFRLEVBQUMsTUFBTSxTQUFTLENBQUM7QUFDakMsT0FBTyxFQUFDLHNCQUFzQixFQUFFLGlDQUFpQyxFQUFFLFNBQVMsRUFBRSxRQUFRLEVBQUMsTUFBTSxRQUFRLENBQUM7QUFDdEcsT0FBTyxFQUFDLG9CQUFvQixFQUFDLE1BQU0sWUFBWSxDQUFDO0FBQ2hELE9BQU8sRUFBQyxPQUFPLEVBQUMsTUFBTSxRQUFRLENBQUM7QUFDL0IsT0FBTyxFQUFDLG1CQUFtQixFQUFFLG9CQUFvQixFQUFFLFNBQVMsRUFBRSxpQkFBaUIsRUFBRSxXQUFXLEVBQUUsZUFBZSxFQUFFLFFBQVEsRUFBQyxNQUFNLFFBQVEsQ0FBQztBQUN2SSxPQUFPLEVBQUMsT0FBTyxFQUFDLE1BQU0sUUFBUSxDQUFDO0FBQy9CLE9BQU8sRUFBQyxrQkFBa0IsRUFBRSxrQkFBa0IsRUFBRSxnQkFBZ0IsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUV2RixjQUFjLFNBQVMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgTExDIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuXG5leHBvcnQge0VNUFRZX0FSUkFZfSBmcm9tICcuLi91dGlsL2VtcHR5JztcbmV4cG9ydCB7YW5jaG9yRGVmLCBlbGVtZW50RGVmfSBmcm9tICcuL2VsZW1lbnQnO1xuZXhwb3J0IHtjbGVhck92ZXJyaWRlcywgY3JlYXRlTmdNb2R1bGVGYWN0b3J5LCBvdmVycmlkZUNvbXBvbmVudFZpZXcsIG92ZXJyaWRlUHJvdmlkZXJ9IGZyb20gJy4vZW50cnlwb2ludCc7XG5leHBvcnQge25nQ29udGVudERlZn0gZnJvbSAnLi9uZ19jb250ZW50JztcbmV4cG9ydCB7bW9kdWxlRGVmLCBtb2R1bGVQcm92aWRlRGVmfSBmcm9tICcuL25nX21vZHVsZSc7XG5leHBvcnQge2RpcmVjdGl2ZURlZiwgcGlwZURlZiwgcHJvdmlkZXJEZWZ9IGZyb20gJy4vcHJvdmlkZXInO1xuZXhwb3J0IHtwdXJlQXJyYXlEZWYsIHB1cmVPYmplY3REZWYsIHB1cmVQaXBlRGVmfSBmcm9tICcuL3B1cmVfZXhwcmVzc2lvbic7XG5leHBvcnQge3F1ZXJ5RGVmfSBmcm9tICcuL3F1ZXJ5JztcbmV4cG9ydCB7Y3JlYXRlQ29tcG9uZW50RmFjdG9yeSwgZ2V0Q29tcG9uZW50Vmlld0RlZmluaXRpb25GYWN0b3J5LCBub2RlVmFsdWUsIFZpZXdSZWZffSBmcm9tICcuL3JlZnMnO1xuZXhwb3J0IHtpbml0U2VydmljZXNJZk5lZWRlZH0gZnJvbSAnLi9zZXJ2aWNlcyc7XG5leHBvcnQge3RleHREZWZ9IGZyb20gJy4vdGV4dCc7XG5leHBvcnQge2NyZWF0ZVJlbmRlcmVyVHlwZTIsIGVsZW1lbnRFdmVudEZ1bGxOYW1lLCBFTVBUWV9NQVAsIGlubGluZUludGVycG9sYXRlLCBpbnRlcnBvbGF0ZSwgcm9vdFJlbmRlck5vZGVzLCB0b2tlbktleX0gZnJvbSAnLi91dGlsJztcbmV4cG9ydCB7dmlld0RlZn0gZnJvbSAnLi92aWV3JztcbmV4cG9ydCB7YXR0YWNoRW1iZWRkZWRWaWV3LCBkZXRhY2hFbWJlZGRlZFZpZXcsIG1vdmVFbWJlZGRlZFZpZXd9IGZyb20gJy4vdmlld19hdHRhY2gnO1xuXG5leHBvcnQgKiBmcm9tICcuL3R5cGVzJztcbiJdfQ==